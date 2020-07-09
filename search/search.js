const inputElement = document.querySelector('#search-input');
const resultsElement = document.querySelector('#search-results');
const infoResultsElement = document.querySelector('#info-results')
const data = getToStorage('search-result');
const query = getToStorage('query-value');

function returnInputValue(queryValue){
    inputElement.value = queryValue;
}

function renderResults(){
    const results = `
        <ul class="search__results__list">
            ${data.results.map(movie => `
            <li class="search__results__list__items">
                <img class ="img__folder" src="${IMG_URL_List + movie.poster_path}">
                <div class="items__info">
                  <h5>Nome</h5>
                </div>
            </li>
    ` ).join('')}    
   `
   resultsElement.innerHTML = results;
}

function getInfoResults(data,queryValue){
    const info = `
        <p class="search__info--text"> ${data.total_results} resultado(s) para "${queryValue}" </p>
    `
    infoResultsElement.innerHTML = info;
}


returnInputValue(query);
getInfoResults(data,query);
renderResults();
