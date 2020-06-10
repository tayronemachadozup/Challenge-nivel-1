const carouselElement = document.querySelector('#slideshow');
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



createCarousel(movies);