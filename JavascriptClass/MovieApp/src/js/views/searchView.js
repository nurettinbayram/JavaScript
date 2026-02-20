import { elements } from "../base";

export const searchResult = (data) => {
  data.results.forEach((movie) => {
    const html = `
        <li class="col d-flex">
          <div class="card h-100 w-100">
            <img
              src="https://media.themoviedb.org/t/p/w185/${movie.poster_path}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body myCard">
              <h5 class="card-title">${movie.title}</h5>
              <a href="#" class="btn btn-primary">Watch</a>
            </div>
          </div>
        </li>
    `;
    elements.searchResult.insertAdjacentHTML("afterbegin", html);
  });
};
