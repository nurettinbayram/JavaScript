import { elements } from "../base";

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResult = () => {
  elements.searchResult.innerHTML = "";
};

export const searchResult = (data) => {
  // IMG ONERROR METODUNU IMG YE EKLEYEREK BUNU PLACEHOLDER YARDIMI ILE ISTENILEN SIZE DEGERINDE BIR IMG ATAYABILIRIZ
  //https://placehold.co/143x215/EEE/31343C

  data.results.forEach((movie) => {
    //Note: img onerror propertysi aldigina dikkat etmelisin
    const html = `
        <li class="col d-flex">
          <div class="card h-100 w-100">
            <img
              src="https://media.themoviedb.org/t/p/w185/${movie.poster_path}"
              class="card-img-top"
              onerror="this.src='https://placehold.co/143x215/EEE/31343C';"
              alt="..."
            />
            <div class="card-body myCard">
              <h5 class="card-title">
              <span class="bg-info px-2 rounded-2">${movie.vote_average}</span>
               ${movie.title}</h5>
              <a href="#${movie.id}" class="btn btn-primary">Details</a>
            </div>
          </div>
        </li>
    `;
    elements.searchResult.insertAdjacentHTML("afterbegin", html);
  });
};
