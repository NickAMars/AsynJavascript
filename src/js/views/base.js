// For reusable things
export const elements ={
  searchForm: document.querySelector('.search'), // form
  searchInput: document.querySelector('.search__field'), // input value
  searchRes: document.querySelector('.results'),  // constainst the results__list
  searchResultList: document.querySelector('.results__list'), // holds the search results
  searchResPages: document.querySelector('.results__pages')
};
// non-existing variable which will be updated when reload is called
export const elementString = {
    loader: 'loader'
};
// gives a load bar so that he use can see they are waiting for something
export const renderLoader = parent => {
    const loader  =`
    <div class="${elementString.loader}">
        <svg>
          <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
};

// clears out the load bar
export const clearLoader = () => {
  // select the loader class from the html
  const loader = document.querySelector(`.${elementString.loader}`);
  // go up to the parent element and remove the child loader from the parent
  if(loader) loader.parentElement.removeChild(loader);
}
