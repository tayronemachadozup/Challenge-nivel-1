//API PATCH
const ApiKEY = '9c5c64f28ef6b06c9548ba6f6077905a';
const MovieDbPath = 'https://api.themoviedb.org';

// URLS IMAGENS 
const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
const IMG_URL1 = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

//API
function generateMovieDBUrl(path) {
    const url = `${MovieDbPath}/3${path}api_key=${ApiKEY}&page=2&language=pt-BR`;
    return url;
  }
  
function requestApi(type,url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      saveToStorage(type,data);
    })
    .catch((err) => {
      console.log('Erro:', err);
    });
}

function renderContent(point,data) {
    const list = `
    <ul class="content__list__carousel">
        ${data.results.map(movie => `
        <li class="content__list__carousel__folder"><img class ="img__forder" src="${IMG_URL1 + movie.poster_path}"></li>
        `).join('')}
    </ul>        
    `;
    renderEndpoint(point).innerHTML = list;
}
  
function renderEndpoint(element){
    return element;
}
 
function saveToStorage(arrName,data){
    localStorage.setItem(arrName, JSON.stringify(data));
}
    
function getToStorage(arr){
    return JSON.parse(localStorage.getItem(arr));
}