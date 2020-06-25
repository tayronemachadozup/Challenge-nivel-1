const resultsElement = document.querySelector('#search-results');

const arrResults = getToStorage('search-result');

console.log('foi chamado', arrResults);

function renderResults(){
    const data = getToStorage('search-result');
    console.log(' Resultados do array que a search vai pegar :',data);
    const results = `
        <ul class="search__results__list">
            ${data.results.map(movie => `
            <li class="search__results__list__items"><img class ="img__folder" src="${IMG_URL_List + movie.poster_path}"></li>
    ` ).join('')}    
   `
   resultsElement.innerHTML = results;
}

renderResults();
