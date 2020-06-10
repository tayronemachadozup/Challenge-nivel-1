const carouselElement = document.querySelector('#slideshow');
var slideIndex = 1;
const IMG_URL = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/';

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

createCarousel(movies);
showSlides(slideIndex);