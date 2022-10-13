// Collect Module
import { moviesData } from "./module/moviesData.js";
import { searchMovie } from "./module/searchMovie.js";
import { stateElement } from "./module/stateElement.js";

// Get API
const movieUrl = "https://api.themoviedb.org/3/discover/movie?&api_key=88ef544735216b8d23c937d6adbce2eb";
const searchMovieUrl = "https://api.themoviedb.org/3/search/movie?&api_key=88ef544735216b8d23c937d6adbce2eb";

const movieElement = document.querySelector("#content");
const formElement = document.querySelector("form");
const searchBar = document.querySelector("#search");


let [movies, setMovies] = stateElement(
    moviesData(
        `${movieUrl}&sort_by=popularity.desc&region=id&page=1&`
    ).then((movie_Data) => movie_Data)
);

searchMovie(movies);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

searchBar.addEventListener("input", (event) => {
    movieElement.innerHTML = "";
    const searchValue = event.target.value;

    if(!searchValue){
        movies = setMovies(
            moviesData(`
                ${movieUrl}&sort_by=popularity.desc&region=id&page=1&
            `).then((movie_Data) => movie_Data)
        );
        searchMovie(movies);
        return;
    };

    movies = setMovies(
        moviesData(`
            ${searchMovieUrl}&query=${searchValue}&region=id
        `).then((movie_Data) => movie_Data)
    );
    searchMovie(movies);
});