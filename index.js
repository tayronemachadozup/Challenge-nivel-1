const carouselElement = document.querySelector('#carousel');
const IMG_URL = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/';

function createCarousel(arrMovies){
    const carousel = `
        ${arrMovies.map(movie =>  `
        <img class ="carousel__img" src="${IMG_URL + movie.poster_path}">
        `).join('')}    
    `
    carouselElement.innerHTML = carousel;
}



createCarousel(movies);