const carouselElement = document.querySelector('#slideshow');
const newContentElement = document.querySelector('#newContent');
const inputElement = document.querySelector('#search-input');


var slideIndex = 1;

const searchURL = 'https://api.themoviedb.org/3/search/multi?api_key=9c5c64f28ef6b06c9548ba6f6077905a&language=pt-BR&page=2&query=';


const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
const IMG_URL1 = 'https://image.tmdb.org/t/p/w220_and_h330_face/';


function createCarousel(arrMovies) {
  const carousel = `
    <ul class="carousel__slideshow">
        ${arrMovies.map(movie => `
        <li class="carousel__slideshow__img"><img class ="carousel__img" src="${IMG_URL + movie.poster_path}"></li>
        `).join('')}
    </ul>        
    `;
  carouselElement.innerHTML = carousel;
}

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


function getmovies(arrMovies) {
  const list = `
  <ul class="content__list__carousel">
      ${arrMovies.map(movie => `
      <li class="content__list__carousel__folder"><img class ="img__forder" src="${IMG_URL1 + movie.poster_path}"></li>
      `).join('')}
  </ul>        
  `;
  newContentElement.innerHTML = list;
}

function searchValue() {
  inputElement.addEventListener("keypress", event => {
    let value = event.target.value.toLowerCase();
    
      if(event.which == 13){
        searchApi(value);
    }
  });
}

function searchApi(type,inputValue) {
  const newURL = `${searchURL}${inputValue}`;
  // colocar ifs para verificar de onde vem a busca de acordo com o type que vai ser colocado na chamada da função 
  
  fetch(newURL)
    .then((res) => res.json())
    .then((data) => {
      saveToStorage('search-result', data);
      window.location.href = './search/search.html'
    })
    .catch((err) => {
      console.log('Erro:', err)
    });
}



function saveToStorage(arrName,data){
  localStorage.setItem(arrName, JSON.stringify(data));
}

function getToStorage(arr){
  return JSON.parse(localStorage.getItem(arr));
}


createCarousel(foldersCarousel);
searchValue();
getmovies(movies);
showSlides(slideIndex);
