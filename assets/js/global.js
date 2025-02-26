'use strict';

// const addEventOnElements = function (elements, eventType, callback) {
//     for (const elem of elements ) elem.addEventListener(eventType, callback);
// }

const addEventOnElements = function (elements, eventType, callback) {
    const iterableElements = Array.from(elements);
    for (const elem of iterableElements) {
      elem.addEventListener(eventType, callback);
    }
  };
  

const searchBox = document.querySelector('[search-box]');
const searchToggler = document.querySelectorAll('[search-toggler]');

addEventOnElements(searchToggler, 'click', ()=>{
    searchBox.classList.toggle("active");
});


const getMovieDetail = function(movieId) {
  window.localStorage.setItem("movieId", String(movieId));
}

const getMovieList = function(urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
}
