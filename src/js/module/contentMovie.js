export const contentMovie = (movieData) => {
    const movieElement = document.querySelector("#content");

    const {original_title, vote_average, poster_path, release_date} = movieData;

    const contentCard = document.createElement("div");
    contentCard.classList.add("col-lg-4", "col-sm-6", "mb-5");

    contentCard.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${poster_path ? `https://www.themoviedb.org/t/p/w500${poster_path}` : "https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"
            }" width="100%" height="400px" alt="${original_title} Movie Poster">
            <div class="card-body d-flex justify-content-between flex-column shadow p-2">
                <div class="row mb-5">
                    <h5 class="card-title col-9 fs-5 text-wrap overflow-hidden">${original_title}</h5>
                    <h6 class="col-3 fw-bold text-end">${parseFloat(vote_average).toFixed(1)}</h6>
                </div>
                <p class="card-text mb-3">${release_date}</p>
            </div>
        </div>
    `;
    movieElement.appendChild(contentCard);
}