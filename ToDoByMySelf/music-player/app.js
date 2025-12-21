const player = new MusicPlayer(musicList);
const ui = new UI();

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  ui.title.innerHTML = music.getName();
  ui.singer.innerHTML = music.singer;
  ui.musicImage.src = "img/" + music.img;
  ui.audio.src = "mp3/" + music.file;
}

ui.play.addEventListener("click", () => {
  ui.audio.play();
});

ui.next.addEventListener("click", () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
});
