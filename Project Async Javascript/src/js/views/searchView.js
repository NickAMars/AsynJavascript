import { elements } from './base'

// automatically return the string from search
export const getInput = () => elements.searchInput.value; // get value from form

export const clearInput = () => { elements.searchInput.value = '';} // clear form
export const clearResults = () => {
  elements.searchResultList.innerHTML ='';// clear html from list
  elements.searchResPages.innerHTML=''; // clear button from buttom page
  }
// shortence the titles
const limitRecipeTitle =(title ,limit = 24) =>{
  const newTitle = [];
  if(title.length > limit){

    //acc - the changing value
    // cur - current element
    title.split(' ').reduce((acc, cur) => {
        if(acc + cur.length <= limit){
          newTitle.push(cur);
        }
        return  acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')}...`;
  }
  return title;
}
// place items in html list
const renderRecipe =recipe =>{ // recipe is treated like an element
  //update item feature in the html tag
const markup =
              `<li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`;
                // puch item in the list beneath other items
                elements.searchResultList.insertAdjacentHTML('beforeend', markup);
 }

// return the buttons
const createButton = (page, type)=>`
<button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    <span>Page ${ type === 'prev' ? page - 1: page + 1}</span>
</button>
`;

const renderButttons = (page, numResults, resPerPage) =>{
    const pages = Math.ceil( numResults/ resPerPage);
    let button;
    if(page === 1 && pages > 1){
      // button to the right
      button = createButton(page, 'next');
    }else if(page < pages){
      // Both button
      button = `${createButton(page, 'prev')}
                ${createButton(page, 'next')}`;
    }else if(page === pages && pages > 1){
      // button to left
      button = createButton(page, 'prev');
    }
    if(button !== undefined)
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

// passing the json object and loops throw all nodes
export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  // we only want 10 result per page
  const start =  (page - 1)*resPerPage; // 0 , 10
  const end   = page * resPerPage;      // 9,  19
    recipes.slice(start, end).forEach(renderRecipe); // the top function

    // show buttons
    renderButttons(page, recipes.length, resPerPage);

}
