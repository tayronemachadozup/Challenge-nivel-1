const carouselElement = document.querySelector('#slideshow');
const inputElement = document.querySelector('#search-input');

const comingUpElement = document.querySelector('#coming-up');
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const moviesLikeElement = document.querySelector('#movies-like');
const addedMoviesElement =document.querySelector('#movies-added');
const moviesThrillerElement = document.querySelector('#movie-thriller');
const addedSeriesElement =document.querySelector('#series-added');

var slideIndex = 1;

//API PATCH
const ApiKEY = '9c5c64f28ef6b06c9548ba6f6077905a';
const MovieDbPath = 'https://api.themoviedb.org';


//const searchURL = 'https://api.themoviedb.org/3/search/multi?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2&query=';

// URLS IMAGENS 
const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
const IMG_URL1 = 'https://image.tmdb.org/t/p/w220_and_h330_face/';


function createCarousel(arrMovies) {
  const carousel = `
    <ul class="carousel__slideshow">
        ${arrMovies.map(movie => `
        <li class="carousel__slideshow__img"><img class ="carousel__img" src="${IMG_URL + movie.poster_path}"></li>
        `).join('')
        
      }
    </ul>        
    `;
  carouselElement.innerHTML = carousel;
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__slideshow__img");
  let dots = document.getElementsByClassName("carousel__pointer--dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function RenderContent(point,data) {
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


function searchValue() {
  inputElement.addEventListener("keypress", event => {
    let value = event.target.value.toLowerCase();
    
      if(event.which == 13){
        //searchApi(value);
    }
  });
}


//API
function generateMovieDBUrl(path) {
  const url = `${MovieDbPath}/3${path}api_key=${ApiKEY}&page=2`;
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

//API Transitions

function getWatchNext(){
  const url = generateMovieDBUrl('/search/trending?');
   requestApi('Watch-Next',url);
   const data = getToStorage('Watch-Next');
     console.log('O arry esta vindo do watch next', data);
   RenderContent(comingUpElement, data);
} 
getWatchNext();

function getAmazonOriginals(){
  const url = generateMovieDBUrl('/tv/on_the_air?');
  requestApi('Amazon-Originals',url);
  const data = getToStorage('Amazon-Originals');
  console.log('O arry esta vindo do amazon originais', data);
  RenderContent(amazonOriginalsElement, data); 
}
getAmazonOriginals();

function getUpcoming(){
  const url = generateMovieDBUrl('/movie/upcoming?');
    requestApi('Upcoming',url);
  const data = getToStorage('Upcoming');
    console.log('O arry esta vindo do Upcoming', data);
    RenderContent(moviesLikeElement, data); 
}
getUpcoming();

function getMoviesAdded(){
  const url = generateMovieDBUrl('/movie/popular?');
   requestApi('Movie-Added',url); 
   const data = getToStorage('Movie-Added');
   console.log('O arry esta vindo de movies added', data);
   RenderContent(addedMoviesElement, data); 
}
getMoviesAdded();

function getMoviesThriller(){
  const url = '';
}

function getSeriesAdded (){
  const url = generateMovieDBUrl('/tv/airing_today?');
   requestApi('Series-Added',url);
   const data = getToStorage('Series-Added');
   console.log('O arry esta vindo de series added', data);
   RenderContent(addedSeriesElement, data); 
}
getSeriesAdded ();


function saveToStorage(arrName,data){
  localStorage.setItem(arrName, JSON.stringify(data));
}
  
function getToStorage(arr){
  return JSON.parse(localStorage.getItem(arr));
}


createCarousel(foldersCarousel);
searchValue();
RenderContent();
showSlides(slideIndex);







//Assista a seguir
  // https://api.themoviedb.org/3/search/trending?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2   ok

// Séries Amazon Originals e exclusivas
  // https://api.themoviedb.org/3/tv/on_the_air?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2 ok

//Filmes que achamos que você vai curtir  
  // https://api.themoviedb.org/3/movie/upcoming?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2 ok

//Filmes adicionados recentemente  
  // https://api.themoviedb.org/3/movie/popular?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2 ok

//Filmes de suspense
  // https://api.themoviedb.org/3/discover/movie?with_genres=18?api_key=9c5c64f28ef6b06c9548ba6f6077905a&apage=2 n funfa
  
 
//Séries adicionadas recentemente
  // https://api.themoviedb.org/3/tv/airing_today?api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2 ok



/*fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      saveToStorage('search-result', data);
      window.location.href = './search/search.html'
    })
    .catch((err) => {
      console.log('Erro:', err)
    });*/