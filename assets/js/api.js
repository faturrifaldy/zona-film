'use strict'

const api_key = '8df5c0f627ba11e6da47de8f48060a8b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';


const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { api_key, imageBaseURL, fetchDataFromServer }