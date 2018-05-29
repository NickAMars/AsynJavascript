// import one class from the Search module
import Search from './models/Search'
import { elements, renderLoader, clearLoader } from './views/base'
import * as searchView from  './views/searchView'


/** GLobal state of the app
*  Search object
*  Current recipe object
*  Shopping list object
*  Liked recipes
*/

const state = {};

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
    await state.search.getResults();
    //show results on UI
    //console.log(state.search.result);
    clearLoader();
    searchView.renderResults(state.search.result);
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
    // gets the page number
    const goToPage = parseInt(btn.dataset.goto, 10);
    //updates the html for result__pagesa and result__list

    searchView.clearResults();// clear html in List
    //clear buttons
    searchView.renderResults(state.search.result, goToPage);
  }

});
