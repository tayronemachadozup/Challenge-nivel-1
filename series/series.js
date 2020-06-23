const comingUpElement = document.querySelector('#coming-up'); // /tv/popular 
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const addedSeriesElement = document.querySelector('#series-added'); // /tv/latest
const bestSeriesElement = document.querySelector('#best-series'); //  /tv/top_rated 
const thrillerSeriesElement =document.querySelector('#thriller-series'); //https://api.themoviedb.org/3/discover/tv?with_genres=9648&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2
const dramaSeriesElement = document.querySelector('#drama-series'); //https://api.themoviedb.org/3/discover/tv?with_genres=18&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

function cleanLocalStorage(){
  localStorage.clear();
}

//https://api.themoviedb.org/3/tv/latest?&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2
//https://api.themoviedb.org/3/tv/on_the_air?&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2
//https://api.themoviedb.org/3/tv/top_rated?&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2

//https://api.themoviedb.org/3/tv/airing_today?&api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2
//url = "https://api.themoviedb.org/3/tv/airing_today?api_key=9c5c64f28ef6b06c9548ba6f6077905a&page=2&language=pt-BR"

function getUpcoming(){
    const url = generateMovieDBUrl('/tv/popular?');
    requestApi('series-coming-up',url);
    const data = getToStorage('series-coming-up');
    console.log('O array esta vindo do Upcoming', data);
    renderContent(comingUpElement, data); 
}

function getAmazonOriginals(){
    const url = generateMovieDBUrl('/tv/on_the_air?');
    requestApi('series-amazon-originals',url);
    const data = getToStorage('series-amazon-originals');
    console.log('O array esta vindo de series amazon originais', data);
    renderContent(amazonOriginalsElement, data); 
}

function getSeriesAdded(){
    const url = generateMovieDBUrl('/tv/airing_today?');
     requestApi('series-added',url);
     const data = getToStorage('serie-adicionada');
     console.log('O array esta vindo de series added', data);
     renderContent(addedSeriesElement, data); 
}

function getBestSeries(){
    const url = generateMovieDBUrl('/tv/top_rated?');
    requestApi('best-series',url);
    const data = getToStorage('best-series');
    console.log('O array esta vindo de best-series', data);
    renderContent(bestSeriesElement, data); 
}

function getThrillerSeries(){
    const url = generateMovieDBUrl('/discover/tv?with_genres=9648&') ;
    requestApi('thriller-series',url);
    const data = getToStorage('thriller-series');
    console.log('O array esta vindo de thriller-series', data);
    renderContent(thrillerSeriesElement, data);
}
  
function getDramaSeries (){
    const url = generateMovieDBUrl('/discover/tv?with_genres=18&');
    requestApi('drama-series',url);
    const data = getToStorage('drama-series');
    console.log('O array esta vindo de drama-series', data);
    renderContent(dramaSeriesElement, data); 
}


//Getters
getUpcoming();
getAmazonOriginals();
getSeriesAdded ();
getBestSeries();  
getThrillerSeries();
getDramaSeries();


  
//cleanLocalStorage();