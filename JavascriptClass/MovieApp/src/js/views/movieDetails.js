import { elements } from "../base";

//important: Scroll hateketini yaptirma.
export function moveToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function movieDetails(movie) {
  elements.movieDetails.innerHTML = "";
  const html = `
      <div class="card mb-3" style="max-width: 740px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://media.themoviedb.org/t/p/w342/${movie.poster_path}"
              class="img-fluid rounded-start"
              alt="..."
              onerror=""
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text">${movie.vote_count}</p>
              <p class="card-text">${movie.overview}</p>              
            </div>
          </div>
        </div>
      </div>
    
    `;
  console.log(movie);
  elements.movieDetails.insertAdjacentHTML("afterbegin", html);
}
