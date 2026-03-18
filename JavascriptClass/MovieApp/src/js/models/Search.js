import { baseURL, api_key } from "../config"; //sabitleri ayri bir dosyadan cagiriyoruz

// Bu bolumde herhangi bir fil adini arama amaci ile olusturulmus class yapisi mevcut
export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  //bu bir method oldugu icin yani class icinde tanimlandigi icin function keywordunu almiyor.
  async getResult() {
    // keyword verisine bagli olarak sonucu dener.
    const response = await fetch(
      `${baseURL}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`,
    );
    //this.data diyerek datayi classa bagli bir property haline getiriyoruz ki buna ulasarak sonuclari elde ederiz
    this.data = await response.json();
  }
}
