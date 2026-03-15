export function movieDetails(movie) {
  const html = `
    
      <div class="movie-details" id="movie-details">
        <div class="imgBox">
          <img src="https://placehold.co/300x350/EEE/31343C" alt="" />
        </div>
        <div class="detaileBox">
          <h2>Name :</h2>
          <h4>Rate :</h4>
          <h4>Description :</h4>
        </div>
      </div>
    
    `;
  console.log(movie);
  // document.getElementById("details").insertAdjacentHTML("afterbegin", html);
}
