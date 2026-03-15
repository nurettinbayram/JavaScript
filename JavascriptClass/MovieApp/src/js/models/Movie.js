import { api_key, baseURL } from "../config";

export default class Movie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    const response = await fetch(
      `${baseURL}/movie/${this.id}?api_key=${api_key}&page=1&query=${this.keyword}`,
    );
    this.data = await response.json();
  }
}
