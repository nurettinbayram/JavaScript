import Search from "./models/Search";
import { elements } from "./base";
import * as seachView from "./views/searchView";

const state = {};

const searchControler = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);
    //Bu method asenkron oldugu icin await key wordunu kullanmaliyiz
    await state.search.getResult();

    seachView.searchResult(state.search.data);
  } else {
    alert("Pleace enter movie name!!!");
  }
};

elements.searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("-----------------Form Submited----------------------------");
  searchControler();
});
