const carouselElement = document.querySelector('#slideshow');

const comingUpElement = document.querySelector('#coming-up'); 
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const addedSeriesElement = document.querySelector('#series-added'); 
const bestSeriesElement = document.querySelector('#best-series'); 
const thrillerSeriesElement = document.querySelector('#thriller-series');
const dramaSeriesElement = document.querySelector('#drama-series'); 


function getUpcoming(){
    handleRequest('/tv/popular?','series-coming-up',comingUpElement);
}

function getAmazonOriginals(){
    handleRequest('/tv/on_the_air?','series-amazon-originals',amazonOriginalsElement);
}

function getSeriesAdded(){
    handleRequest('/tv/airing_today?','series-added',addedSeriesElement);
}

function getBestSeries(){
    handleRequest('/tv/top_rated?','best-series',bestSeriesElement);
}

function getThrillerSeries(){
    handleRequest('/discover/tv?with_genres=9648&','thriller-series',thrillerSeriesElement);
}
  
function getDramaSeries(){
    handleRequest('/discover/tv?with_genres=18&','drama-series',dramaSeriesElement);
}


//Getters
getUpcoming();
getAmazonOriginals();
getSeriesAdded ();
getBestSeries();  
getThrillerSeries();
getDramaSeries();

renderCarousel(seriesCarousel,carouselElement);
  
