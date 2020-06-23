const amazonOriginalsElement = document.querySelector('#childish-amazon-originals'); 
const bestMoviesElement = document.querySelector('#childish-best-movies');
const actionMoviesElement = document.querySelector('#childish-action-movies');  
const educationalSeriesElement = document.querySelector('#childish-educational-series');
const moviesSeriesElement = document.querySelector('#childish-movies-series');  
const animationElement = document.querySelector('#childish-animation');


function getAmazonOriginals(){
    const url = generateMovieDBUrl('');
    requestApi('',url);
    const data = getToStorage('');
    console.log('O array esta vindo de movies amazon originais', data);
    renderContent(amazonOriginalsElement, data); 
}

function getBestMovies(){
    const url = generateMovieDBUrl('');
    requestApi('best-movies',url);
    const data = getToStorage('best-movies');
    console.log('O array esta vindo de best-movies', data);
    renderContent(bestMoviesElement, data); 
}

function getActionMovies(){
    const url = generateMovieDBUrl('');
    requestApi('',url);
    const data = getToStorage('');
    console.log('O array esta vindo de ', data);
    renderContent(bestMoviesElement, data); 
}

function getEducationalSeries(){
    const url = generateMovieDBUrl('');
    requestApi('',url);
    const data = getToStorage('');
    console.log('O array esta vindo ', data);
    renderContent(bestMoviesElement, data); 
}

function getMoviesSeries(){
    const url = generateMovieDBUrl('') ;
    requestApi('',url);
    const data = getToStorage('');
    console.log('O array esta vindo de ', data);
    renderContent(thrillerMoviesElement, data);
}
  
function getAnimations(){
    const url = generateMovieDBUrl('');
    requestApi('',url);
    const data = getToStorage('');
    console.log('O array esta vindo de ', data);
    renderContent(animationElement, data); 
}


//Getters
getAmazonOriginals();
getBestMovies();
getActionMovies();
getEducationalSeries();
getMoviesSeries();
getAnimations();

 
 
 
//https://api.themoviedb.org/3/discover/tv?with_genres=16&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

 // discover/tv?with_genres=10762