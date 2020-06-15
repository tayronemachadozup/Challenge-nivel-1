const carouselElement = document.querySelector('#slideshow');
const newContentElement = document.querySelector('#newContent');

var slideIndex = 1;
const IMG_URL = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/';

const IMG_URL1 = 'https://image.tmdb.org/t/p/w220_and_h330_face/';


function createCarousel(arrMovies){
    const carousel = `
    <ul class="carousel__slideshow">
        ${arrMovies.map(movie =>  `
        <li class="carousel__slideshow__img"><img class ="carousel__img" src="${IMG_URL + movie.poster_path}"></li>
        `).join('')}
    </ul>        
    `;
    carouselElement.innerHTML = carousel;
}


function getmovies(arrMovies){
  const list = `
  <ul class="content__list__carousel">
      ${arrMovies.map(movie =>  `
      <li class="content__list__carousel__folder"><img class ="img__forder" src="${IMG_URL1 + movie.poster_path}"></li>
      `).join('')}
  </ul>        
  `;
  newContentElement.innerHTML = list;
}






function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__slideshow__img");
  let dots = document.getElementsByClassName("carousel__pointer--dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

getmovies(movies);
createCarousel(movies);
showSlides(slideIndex);