import Search from "./models/Search";
import { elements } from "./base";
import * as seachView from "./views/searchView";
import Movie from "./models/Movie";
import { movieDetails } from "./views/movieDetails";

const state = {};

// Search Controler
const searchControler = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);
    //Bu method asenkron oldugu icin await key wordunu kullanmaliyiz
    await state.search.getResult();

    seachView.clearInput();
    seachView.clearResult();

    seachView.searchResult(state.search.data);
  } else {
    alert("Pleace enter movie name!!!");
  }
};

// Burada form submit edildigine dikkat et burada button submit ozelligi yok
elements.searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("-----------------Form Submited----------------------------");
  searchControler();
});

// Movie Controler
const movie = new Movie(252291);
movie.getMovie();
const movieControler = async () => {
  const id = window.location.hash.replace("#", "");
  if (id) {
    console.log(id);
    state.movie = new Movie(id);
    elements.movieDetails.style.display = "flex";
    movieDetails(await state.movie.getMovie());
  }
};

window.addEventListener("hashchange", movieControler);

//---------------Desabled Card---------------------

const card = document.getElementById("movie-details");

document.addEventListener("click", function (event) {
  if (!card.contains(event.target)) {
    card.style.display = "none";
    console.log("it does not contain");
  } else {
    console.log("it contains");
  }
});
