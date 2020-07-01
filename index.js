const carouselElement = document.querySelector('#slideshow');
const inputElement = document.querySelector('#search-input');

const comingUpElement = document.querySelector('#coming-up');
const amazonOriginalsElement = document.querySelector('#amazon-originals');
const moviesLikeElement = document.querySelector('#movies-like');
const addedMoviesElement =document.querySelector('#movies-added');
const moviesThrillerElement = document.querySelector('#thriller-movie');
const addedSeriesElement =document.querySelector('#series-added');

var slideIndex = 1;

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
  let arrSearch = getToStorage('search-result');
  inputElement.addEventListener("keypress", event => {
    let value = event.target.value.toLowerCase();
    if(event.which == 13){
      const url = generateMovieDBUrl('/search/multi?')+`&query=${value}`;
      if(arrSearch){
        localStorage.removeItem('search-result');
      }
      requestApi('search-result',url,function(){
        window.location.href = './search/search.html';
      });
    }
  });
}

function scrollNext(element){
  const ulElement = document.getElementById(element).getElementsByTagName("ul")[0]
    ulElement.scrollLeft += 200
}

function scrollPrev(element){
  const ulElement = document.getElementById(element).getElementsByTagName("ul")[0]
    ulElement.scrollLeft -= 200
}

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
showSlides(slideIndex);


