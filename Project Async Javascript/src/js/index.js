// import one class from the Search module
import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from  './views/searchView';
import * as recipeView from  './views/recipeView';


/** GLobal state of the app
*  Search object
*  Current recipe object
*  Shopping list object
*  Liked recipes
*/

const state = {};
/**
* SEARCH CONTROLLER
*/
const controlSearch = async () => {
// get query from view
const query = searchView.getInput();
//console.log(query);
  if(query){
    //new search object
    state.search = new Search(query);
    // search for recipes
    searchView.clearInput(); // clear input field
    searchView.clearResults();// clear html fields
    renderLoader(elements.searchRes);
      try{
      await state.search.getResults();
      //show results on UI
      //console.log(state.search.result);
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch(error){
      alert("Something went wrong with Searching");
    }
  }


}
//document.querySelector('.search')
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault(); // prevent the page from reloading
  controlSearch();
});
elements.searchResPages.addEventListener('click', e =>{
  // returns the closest ancester of the element
  const btn = e.target.closest('.btn-inline');// only interested in the button elemenet

  if(btn){
    // btn.dataset.goto gets the page number from 'prev' and 'next'
    const goToPage = parseInt(btn.dataset.goto, 10); // turn the number to an integer

    searchView.clearResults();
    // clear html in List
    //clear buttons


    searchView.renderResults(state.search.result, goToPage);
  }

});

/**
* RECIPE CONTROLLER
*/
/*
const r = new Recipe('8061c3');
r.getRecipe();
console.log(r);

elements.searchResultList.addEventListener('click', e =>{
  //console.log(e.target);
  const httpResult = e.target.closest('.results__link').href; // get id value from href
  const stringNumber = httpResult.search("#") + 1; // get the number of element until '#'
  const recipeId = httpResult.slice(stringNumber, httpResult.length); // take out all id after

  //const recipeId = httpResult.replace('http://localhost:8080/#', '')
  console.log(recipeId);
});*/

const controlRecipe = async () => {
  const id = window.location.hash.slice(1); // remove #
  //console.log(id);
  if(id){

    //prepare ui for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);
    //create new recipe object
    state.recipe = new Recipe(id);
    // Test case
  //  window.r = state.recipe;
    try{
      //get recipe data parse ingredents
      await state.recipe.getRecipe();
      console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();
      //Calculate servings and timeout
      state.recipe.calcTime();
      state.recipe.calcServings();
      //render recipe
      clearLoader();
    //  console.log(state.recipe);
     recipeView.renderRecipe(state.recipe);
    }catch(error){
      console.log(error);
      alert('Error processing recipe!');
    }
  }
}
/*
// global object window
window.addEventListener('hashchange', controlRecipe); // when the hash changes
window.addEventListener('load', controlRecipe); // when we load the page
*/
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
