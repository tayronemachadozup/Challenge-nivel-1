const comingUpElement = document.querySelector('#movies-coming-up');
const amazonOriginalsElement = document.querySelector('#movies-amazon-originals'); 
const addedMoviesElement = document.querySelector('#movies-added'); 
const bestMoviesElement = document.querySelector('#best-movies');
const thrillerMoviesElement = document.querySelector('#thriller-movies');
const dramaMoviesElement = document.querySelector('#drama-movies');  

function getUpcoming(){
    const url = generateMovieDBUrl('/movie/upcoming?');
    requestApi('movies-coming-up',url);
    const data = getToStorage('movies-coming-up');
    console.log('O array esta vindo do Upcoming', data);
    renderContent(comingUpElement, data); 
}

function getAmazonOriginals(){
    const url = generateMovieDBUrl('/movie/now_playing?');
    requestApi('movies-amazon-originals',url);
    const data = getToStorage('movies-amazon-originals');
    console.log('O array esta vindo de movies amazon originais', data);
    renderContent(amazonOriginalsElement, data); 
}

function getmoviesAdded(){
    const url = generateMovieDBUrl('/movie/popular?');
    requestApi('movies-added',url);
    const data = getToStorage('movies-added');
    console.log('O array esta vindo de movies added', data);
    renderContent(addedMoviesElement, data); 
}

function getBestMovies(){
    const url = generateMovieDBUrl('/movie/top_rated?');
    requestApi('best-movies',url);
    const data = getToStorage('best-movies');
    console.log('O array esta vindo de best-movies', data);
    renderContent(bestMoviesElement, data); 
}

function getThrillerMovies(){
    const url = generateMovieDBUrl('/discover/movie?with_genres=9648&') ;
    requestApi('thriller-movies',url);
    const data = getToStorage('thriller-movies');
    console.log('O array esta vindo de thriller-movies', data);
    renderContent(thrillerMoviesElement, data);
}
  
function getDramaMovies(){
    const url = generateMovieDBUrl('/discover/movie?with_genres=18&');
    requestApi('drama-movies',url);
    const data = getToStorage('drama-movies');
    console.log('O array esta vindo de drama-movies', data);
    renderContent(dramaMoviesElement, data); 
}


//Getters
getUpcoming();
getAmazonOriginals();
getmoviesAdded();
getBestMovies();  
getThrillerMovies();
getDramaMovies();
