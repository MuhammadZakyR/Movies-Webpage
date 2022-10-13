import { contentMovie } from "./contentMovie.js";

export const searchMovie = (notfoundMovie) => {
    const searchBar = document.querySelector("#search");
    const movieElement = document.querySelector("#content");
    movieElement.innerHTML = "";

    notfoundMovie.then((movie) => {
        if(!movie.results.length){
            movieElement.innerHTML = `
            <div class="col-col-12 d-block">
                <h3 class="fw-medium text-center mt-5 mb-5">Search Result : ${searchBar.value}</h3>
                <h1 class="fw-bold text-center">Not Found</h1>
            </div>
            `;
            return;
        }

        movie.results.forEach((movie) => {
            return contentMovie(movie);
        });

    });
};