const resultsElement = document.querySelector('#search-results');
const arrResults = getToStorage('search-result');

console.log(arrResults);

function renderResults(data){
   const result = `
    <ul class="search__results__list">
        ${data.results.map(movie => `
        <li class="search__results__list__items"><img class ="img__forder" src="${IMG_URL1 + movie.poster_path}"></li></li>
        
    ` ).join('')}    
   `
   resultsElement.innerHTML = result;
}


function getToStorage(arr){
    return JSON.parse(localStorage.getItem(arr));
}



renderResults(arrResults);
