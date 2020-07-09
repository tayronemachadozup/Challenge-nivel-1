let activeFolder = 0;

//API PATCH
const ApiKEY = '9c5c64f28ef6b06c9548ba6f6077905a';
const MovieDbPath = 'https://api.themoviedb.org';

// URLS IMAGENS 
const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
const IMG_URL_List = 'https://image.tmdb.org/t/p/w220_and_h330_face/';


function search() {
  let arrSearch = getToStorage('search-result');
  inputElement.addEventListener("keypress", event => {
    let value = event.target.value.toLowerCase();
    saveToStorage('query-value',value);
    if(event.which == 13){
      const url = generateMovieDBUrl('/search/multi?')+`&query=${value}`;

      if(arrSearch){
        localStorage.removeItem('search-result');
      }
      requestApi('search-result',url,function(){
        window.location.href = './search/search.html';
      });
    }
  });
}

//API URL
function generateMovieDBUrl(path) {
  const url = `${MovieDbPath}/3${path}api_key=${ApiKEY}&page=2&language=pt-BR`;
  return url;
}
  
function requestApi(type,url,callback) { 
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log('request api', data);
      saveToStorage(type,data);
      if(callback){
        callback();
      }
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}

async function handleRequest(path,type,element){
  try{
    let data = getToStorage(type);
    if (!data) {
      const url = generateMovieDBUrl(path);
      await requestApi(type,url);
      data = getToStorage(type);
    }
    renderContent(element, data); 
  }
  catch(err){
  console.log(err.msg);
  }
}

function renderContent(point,data) {
  const list = `
    <ul class="content__list__carousel">
        ${data.results.map(movie => `
        <li class="content__list__carousel__folder">
          <div><img class ="img__folder" src="${IMG_URL_List + movie.poster_path}"></div>
         
          <div class ="carousel__info">
            <div class="icon">
              <div class="icon__play"><i class="far fa-play-circle"></i> </div>
              <div class="icon__add"><i class="fas fa-plus"></i></div>
            </div>
            
            <h3 class="desc__title">${checkTitle(movie)}</h3>
            <div class="carousel__item">
              <p class="carousel__item__info">${movie.overview}</p>
            </div>
            <ul class="description__list">
                <li class="description__list__item>
                  <i class="fas fa-plus"></i>${movie.popularity}
                <li>
            </ul>
          </div>
        </li>
        `).join('')}
    </ul>        
  `;
  renderEndpoint(point).innerHTML = list;
}
  
function renderEndpoint(element){
  return element;
}

function checkTitle(movie){
  if (movie.title != undefined)
    return movie.title;
  else
    return movie.name;
}

function renderCarousel(arrMovies,element) {
  const carousel = `
        ${arrMovies.map(movie => `
        <li><img class ="slideshow__list__img" src="${IMG_URL + movie.poster_path}"></li>
        `).join('')
      }      
    `;
    element.innerHTML = carousel;
}

function slideNext(element){
  
    activeFolder++;
  
  const endpoint = document.getElementById(element);
      endpoint.style.setProperty('--trasitionX',-activeFolder);

}

function slidePrev(element){
  if(activeFolder != 0)
      activeFolder--;

  const endpoint = document.getElementById(element);
      endpoint.style.setProperty('--trasitionX',-activeFolder);   
}


function scrollNext(element){
  const ulElement = document.getElementById(element).getElementsByTagName("ul")[0]
    ulElement.scrollLeft += 1200
}

function scrollPrev(element){
  const ulElement = document.getElementById(element).getElementsByTagName("ul")[0]
    ulElement.scrollLeft -= 1100
}

function saveToStorage(arrName,data){
  localStorage.setItem(arrName, JSON.stringify(data));
}
    
function getToStorage(arrName){
  return JSON.parse(localStorage.getItem(arrName));
}