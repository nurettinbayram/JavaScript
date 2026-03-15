import { baseURL, api_key } from "../config";

export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  async getResult() {
    const response = await fetch(
      `${baseURL}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`,
    );
    this.data = await response.json();
    console.log(this.data.results);
  }
}
