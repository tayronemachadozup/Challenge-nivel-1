const carouselElement = document.querySelector('#slideshow-list');
const inputElement = document.querySelector('#search-input');

const comingUpElement = document.querySelector('#coming-up');
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const moviesLikeElement = document.querySelector('#movies-like');
const addedMoviesElement =document.querySelector('#movies-added');
const moviesThrillerElement = document.querySelector('#thriller-movie');
const addedSeriesElement =document.querySelector('#series-added');





//API Transitions
function getWatchNext(){
  handleRequest('/search/trending?','Watch-Next',comingUpElement);
} 

function getAmazonOriginals(){
  handleRequest('/tv/on_the_air?','Amazon-Originals',amazonOriginalsElement);
}

function getUpcoming(){
  handleRequest('/movie/upcoming?','Upcoming',moviesLikeElement);
}

function getMoviesAdded(){
  handleRequest('/movie/popular?','Movie-Added',addedMoviesElement);
}

function getMoviesThriller(){
  handleRequest('/discover/movie?with_genres=18&','thriller-movie',moviesThrillerElement);
}

function getSeriesAdded(){
  handleRequest('/tv/airing_today?','Series-Added',addedSeriesElement);
}


//getters
getWatchNext();
getAmazonOriginals();
getUpcoming();
getMoviesAdded();
getMoviesThriller();
getSeriesAdded ();

renderCarousel(indexCarousel,carouselElement);
search();


