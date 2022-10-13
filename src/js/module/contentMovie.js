export const contentMovie = (movieData) => {
    const movieElement = document.querySelector("#content");

    const {title, vote_average, poster_path, release_date} = movieData;

    let newDate = new Date(release_date).toDateString()
    let arrDate = newDate.split(" ")
    arrDate.shift()
    let yearDate = arrDate.slice(2)
    arrDate.pop()
    let dayDate = arrDate.join(" ");

    
    const contentCard = document.createElement("div");
    contentCard.classList.add("col-lg-4", "col-sm-6", "mb-5");

    contentCard.innerHTML = `
        <div id=card class="card">
            <img class="card-img-top" src="${poster_path ? `https://www.themoviedb.org/t/p/w500${poster_path}` : "https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"
            }" width="100%" height="400px" alt="${title} Movie Poster">
            <div id="desc" class="card-body d-flex justify-content-between flex-column shadow p-2">
                <div class="row">
                    <h5 class="card-title col-9 fs-5 text-wrap overflow-hidden">${title}</h5>
                    <h6 class="col-3 fw-bold text-end">${parseFloat(vote_average).toFixed(1)}</h6>
                </div>
                <p class="card-text">${dayDate + ", " + yearDate}</p>
            </div>
        </div>
    `;
    movieElement.appendChild(contentCard);
}