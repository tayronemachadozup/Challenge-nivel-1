const carouselElement = document.querySelector('#slideshow');
const inputElement = document.querySelector('#search-input');

const comingUpElement = document.querySelector('#coming-up');
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const moviesLikeElement = document.querySelector('#movies-like');
const addedMoviesElement =document.querySelector('#movies-added');
const moviesThrillerElement = document.querySelector('#thriller-movie');
const addedSeriesElement =document.querySelector('#series-added');

var slideIndex = 1;

function reload(){
  document.location.reload(true);
}

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


function search() {
  inputElement.addEventListener("keypress", event => {
    let value = event.target.value.toLowerCase();
    
      if(event.which == 13){
        const url = generateMovieDBUrl('/search/multi?')+`&query=${value}`;
        requestApi('search-result',url);
        //window.location.href = './search/search.html';
        console.log(getToStorage('search-result'));
    }
  });
}


//API Transitions
function getWatchNext(){
  const url = generateMovieDBUrl('/search/trending?');
   requestApi('Watch-Next',url);
   const data = getToStorage('Watch-Next');
     console.log('O array esta vindo do watch next', data);
   renderContent(comingUpElement, data);
} 

function getAmazonOriginals(){
  const url = generateMovieDBUrl('/tv/on_the_air?');
  requestApi('Amazon-Originals',url);
  const data = getToStorage('Amazon-Originals');
  console.log('O array esta vindo do amazon originais', data);
  renderContent(amazonOriginalsElement, data); 
}

function getUpcoming(){
  const url = generateMovieDBUrl('/movie/upcoming?');
    requestApi('Upcoming',url);
  const data = getToStorage('Upcoming');
    console.log('O array esta vindo do Upcoming', data);
    renderContent(moviesLikeElement, data); 
}

function getMoviesAdded(){
  const url = generateMovieDBUrl('/movie/popular?');
   requestApi('Movie-Added',url); 
   const data = getToStorage('Movie-Added');
   console.log('O array esta vindo de movies added', data);
   renderContent(addedMoviesElement, data); 
}

function getMoviesThriller(){
  const url = generateMovieDBUrl('/discover/movie?with_genres=18&') ;
  requestApi('thriller-movie',url);
  const data = getToStorage('thriller-movie');
  console.log('O array esta vindo de thriller-movie', data);
  renderContent(moviesThrillerElement, data);
}

function getSeriesAdded (){
  const url = generateMovieDBUrl('/tv/airing_today?');
   requestApi('Series-Added',url);
   const data = getToStorage('Series-Added');
   console.log('O array esta vindo de series added', data);
   renderContent(addedSeriesElement, data); 
}




//getters
getWatchNext();
getAmazonOriginals();
getUpcoming();
getMoviesAdded();
getMoviesThriller();
getSeriesAdded ();

createCarousel(foldersCarousel);
search();
renderContent();
showSlides(slideIndex);
reload();

