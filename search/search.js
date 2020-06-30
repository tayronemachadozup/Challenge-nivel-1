const resultsElement = document.querySelector('#search-results');
const infoResultsElement = document.querySelector('#info-results')
const data = getToStorage('search-result');

function renderResults(){
    
    const results = `
        <ul class="search__results__list">
            ${data.results.map(movie => `
            <li class="search__results__list__items"><img class ="img__folder" src="${IMG_URL_List + movie.poster_path}"></li>
    ` ).join('')}    
   `
   resultsElement.innerHTML = results;
}

function getInfoResults(data){
    const info = `
        <p class="search__info__result--text"> ${data.total_results} resultado(s) para "Query" </p>
    `
    infoResultsElement.innerHTML = info;
}



renderResults();
getInfoResults(data);