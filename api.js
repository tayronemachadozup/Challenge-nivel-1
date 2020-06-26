//API PATCH
const ApiKEY = '9c5c64f28ef6b06c9548ba6f6077905a';
const MovieDbPath = 'https://api.themoviedb.org';

// URLS IMAGENS 
const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
const IMG_URL_List = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

//API URL
function generateMovieDBUrl(path) {
  const url = `${MovieDbPath}/3${path}api_key=${ApiKEY}&page=2&language=pt-BR`;
  return url;
}
  
function requestApi(type,url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log('request api', data);
      saveToStorage(type,data);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}

function renderContent(point,data) {
  //console.log('render content', data);
  const list = `
    <ul class="content__list__carousel">
        ${data.results.map(movie => `
        <li class="content__list__carousel__folder"><img class ="img__folder" src="${IMG_URL_List + movie.poster_path}"></li>
        `).join('')}
    </ul>        
  `;
  renderEndpoint(point).innerHTML = list;
}
  
function renderEndpoint(element){
    return element;
}

async function handleRequest(path,type,element){
  try{
    let data = getToStorage(type);
    if (!data) {
      const url = generateMovieDBUrl(path);
      await requestApi(type,url);
      data = getToStorage(type);
      console.log('não exite');
    }
    renderContent(element, data); 
  }
  catch(err){
  console.log(err.msg);
  }
}

function renderCarousel(arrMovies,element) {
  const carousel = `
    <ul class="carousel__slideshow">
        ${arrMovies.map(movie => `
        <li class="carousel__slideshow__img"><img class ="carousel__img" src="${IMG_URL + movie.poster_path}"></li>
        `).join('')
      }
    </ul>        
    `;
    element.innerHTML = carousel;
}



function saveToStorage(arrName,data){
  localStorage.setItem(arrName, JSON.stringify(data));
}
    
function getToStorage(arrName){
  return JSON.parse(localStorage.getItem(arrName));
}