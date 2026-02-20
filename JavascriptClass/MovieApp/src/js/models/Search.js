export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  async getResult() {
    const api_key = "7dcc8afb3a6e4de80620f847dea7fc2d";
    const baseURL = "https://api.themoviedb.org/3";

    const response = await fetch(
      `${baseURL}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`,
    );
    this.data = await response.json();
    console.log(this.data.results);
  }
}
