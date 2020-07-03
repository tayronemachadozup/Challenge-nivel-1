const inputElement = document.querySelector('#search-input');
const carouselElement = document.querySelector('#slideshow');

const comingUpElement = document.querySelector('#movies-coming-up');
const amazonOriginalsElement = document.querySelector('#movies-amazon-originals'); 
const addedMoviesElement = document.querySelector('#movies-added'); 
const bestMoviesElement = document.querySelector('#best-movies');
const thrillerMoviesElement = document.querySelector('#thriller-movies');
const dramaMoviesElement = document.querySelector('#drama-movies');  


function getUpcoming(){
    handleRequest('/movie/upcoming?','movies-coming-up',comingUpElement);
}

function getAmazonOriginals(){
    handleRequest('/movie/now_playing?','movies-amazon-originals',amazonOriginalsElement);
}

function getMoviesAdded(){
    handleRequest('/movie/popular?','movies-added',addedMoviesElement);
}

function getBestMovies(){
    handleRequest('/movie/top_rated?','best-movies',bestMoviesElement);
}

function getThrillerMovies(){
    handleRequest('/discover/movie?with_genres=9648&','thriller-movies',thrillerMoviesElement);
}
  
function getDramaMovies(){
    handleRequest('/discover/movie?with_genres=18&','drama-movies',dramaMoviesElement);
}


//Getters
getUpcoming();
getAmazonOriginals();
getMoviesAdded();
getBestMovies();  
getThrillerMovies();
getDramaMovies();

search();
renderCarousel(moviesCarousel,carouselElement);