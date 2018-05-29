
import axios from 'axios'; // better thank fetch
// export just one class
export default class Search {
  constructor(query){
    this.query = query;
  }
  //this.results = recipes
  async getResults(){
        const key = "f3e93b244e75ce9ffb6f56d214e7a09d";// APIKEY
        const proxy = "https://cors-anywhere.herokuapp.com/";
        try{ // axios is better than fetch
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes; // save all objects to result
        }catch(error){
        console.log(error);
        }
  }
}
