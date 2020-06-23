const comingUpElement = document.querySelector('#coming-up'); 
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const addedSeriesElement = document.querySelector('#series-added'); 
const bestSeriesElement = document.querySelector('#best-series'); 
const thrillerSeriesElement = document.querySelector('#thriller-series');
const dramaSeriesElement = document.querySelector('#drama-series'); 

//function cleanLocalStorage(){
 // localStorage.clear();
//}

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
    const data = getToStorage('series-added');
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
  
function getDramaSeries(){
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