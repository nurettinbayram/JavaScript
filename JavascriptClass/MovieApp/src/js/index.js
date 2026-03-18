import Search from "./models/Search";
import { elements } from "./base";
import * as seachView from "./views/searchView"; //? Burada herseyi seachView adi ile dahil eder
import Movie from "./models/Movie";
import { movieDetails, moveToTop } from "./views/movieDetails";

//state adinda bir bir obje olusturulur ve bizim degiskenler bunun icine tanimlanir bunun sebebi farkli ayni
// isimde iki veri olsada farkli objelere bagli olduklari icin farkli deger gosterir buda kafa karisikligini onler.
const state = {};

//!------------------------- Search Controler -----------------------------
const searchControler = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    // olusturulan bir search nesnesini state objesinin bir propertysi haline getirdik.
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
// base.js dosyasi altinda elements adinda bir obje tanimlanarak tum elementler burada tanimlanir
//!-----------------Form Submited----------------------------
elements.searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchControler();
});

//!--------------------- Movie Controler ---------------------------

const movieControler = async () => {
  //Note: Bu kisim onemli hashtag verisini nasil ele alacagimizi bize gosterir.
  const id = window.location.hash.replace("#", "");
  if (id) {
    state.movie = new Movie(id);
    await state.movie.getMovie();
    movieDetails(state.movie.data);
    moveToTop();
  }
};

//Note: hashchange eventi ile bilgiler guncellenir.
window.addEventListener("hashchange", movieControler);
