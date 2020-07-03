const inputElement = document.querySelector('#search-input');
const carouselElement = document.querySelector('#slideshow');

const amazonOriginalsElement = document.querySelector('#childish-amazon-originals'); 
const bestMoviesElement = document.querySelector('#childish-best-movies');
const actionMoviesElement = document.querySelector('#childish-action-movies');  
const educationalSeriesElement = document.querySelector('#childish-educational-series');
const moviesSeriesElement = document.querySelector('#childish-movies-series');  
const animationElement = document.querySelector('#childish-animations');


function getAmazonOriginals(){
    handleRequest('/discover/tv?with_genres=10762&','kids-series',amazonOriginalsElement);
}

function getBestMovies(){
    handleRequest('/discover/movie?with_genres=16&','kids-best-movies',bestMoviesElement);
}

function getActionMovies(){
    handleRequest('','',);
}

function getEducationalSeries(){
    handleRequest('/discover/tv?with_genres=10751&','kids-educational-series',educationalSeriesElement);
}

function getMoviesSeries(){
    handleRequest('','',);
}
  
function getAnimations(){
    handleRequest('/discover/tv?with_genres=16&','kids-animation',animationElement);
}


//Getters
getAmazonOriginals();
getBestMovies();
// getActionMovies();
getEducationalSeries();
// getMoviesSeries();
getAnimations();

 
 //https://www.themoviedb.org/search/remote/tv_network?take=50&skip=0&page=1&
 
//https://api.themoviedb.org/3/discover/tv?with_genres=10762&with_genres=10759&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

 // discover/tv?with_genres=10762&

 // aventura href="/discover/tv?with_genres=10759"


 //https://api.themoviedb.org/3/discover/tv?with_genres=10762&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

 //https://api.themoviedb.org/3/discover/tv?with_genres=10751&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

//https://api.themoviedb.org/3/discover/movies?with_genres=16&12&28&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2
 /*
 {
  "genres": [
    {
      "id": 28,
      "name": "Ação" --
    },
    {
      "id": 12,
      "name": "Aventura" --
    },
    {
      "id": 16,
      "name": "Animação"  --
    },
    {
      "id": 35,
      "name": "Comédia"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentário"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Família"
    },
    {
      "id": 14,
      "name": "Fantasia"
    },
    {
      "id": 36,
      "name": "História"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Mistério"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ficção científica"
    },
    {
      "id": 10770,
      "name": "Cinema TV"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },
    {
      "id": 37,
      "name": "Faroeste"
    }
  ]
}
 
 */