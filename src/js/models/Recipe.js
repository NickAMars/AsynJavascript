import axios from 'axios';
import { key , proxy } from '../config';
export default class Recipe{ // class
  constructor(id){ // takes Requires ID
    this.id = id;
  }
  async getRecipe(){
      try {
        const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`); // API call
        // GET INFORMATION   ---  title , author, img, url and ingredients
        this.title       = res.data.recipe.title;
        this.author      = res.data.recipe.publisher;
        this.img         = res.data.recipe.image_url;
        this.url         = res.data.recipe.source_url;
        this.ingredients = res.data.recipe.ingredients;

        //console.log(res);
      }catch(error){
        console.log(error);
        alert('Something went wrong')
      }
  }

  calcTime(){
    // assume we need 15 min for each 3 ingredients
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }
  calcServings(){
    this.servings = 4;
  }

// change ingredients
        parseIngredients(){
          const unitsLong = ['tablespoons','tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds' ];
          const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound' ];
          const units = [...unitsShort, 'kg', 'g'];
          const newIngredients = this.ingredients.map(el => {
                // Uniform units
                let ingredient = el.toLowerCase();
                unitsLong.forEach((unit, ind) => {
                  ingredient = ingredient.replace(unit, unitsShort[ind]);
                });
                // Remove parenthes
                ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');


                //Parse ingredients into count, unit and ingredient
                const arrIng = ingredient.split(' '); // create an array
                const unitIndex = arrIng.findIndex(el2 => units.includes(el2)); // inlcudes is es6 returns true if element is in array

                let objIng;
                if (unitIndex > -1) {
                      // there is a unit
                      const arrCount = arrIng.slice(0, unitIndex); //[2,  2/3,  ozs] unit index can be at the 2nd index or first which would give us two or one integer
                      let count;
                      if (arrCount.length === 1) { // there is only 1 number
                        count = eval(arrIng[0].replace('-', '+'));
                      } else {
                        count = eval(arrIng.slice(0, unitIndex).join('+')); //more than one number
                      }

                      objIng = {
                      count,
                      unit: arrIng[unitIndex],
                      ingredient: arrIng.slice(unitIndex + 1).join(' ')
                      };

                } else if (parseInt(arrIng[0], 10)) {
                  // there is no unit but the first element is a number
                  objIng = {
                    count: parseInt(arrIng[0], 10), // first element is a number
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                  };

                } else if (unitIndex === -1) {
                  // there is No unit and no number in 1st position
                  objIng = {
                    count: 1,
                    unit: '',
                    ingredient // ingredient = ingredient
                  };
                }

                return objIng;
          });
        this.ingredients = newIngredients;
        }
        updateServings (type) {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });

        this.servings = newServings;
    }

  }
