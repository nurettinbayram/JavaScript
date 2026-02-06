const player = new MusicPlayer(musicList);
const ui = new UI();

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
  displayMusicList(player.musicList);
});

function displayMusic(music) {
  ui.title.innerHTML = music.getName();
  ui.singer.innerHTML = music.singer;
  ui.musicImage.src = "img/" + music.img;
  ui.audio.src = "mp3/" + music.file;
}

//--------------------------------------------------------------
var isPlay=false;

ui.play.addEventListener("click", () => {
  if(isPlay){
    musicPause();
  }
  else{
    musicPlay();
  }
});


function musicPlay(){
    ui.audio.play();
    ui.play.classList.remove("fa-play");
    ui.play.classList.add("fa-pause");
    isPlay=true;
}

function musicPause(){
    ui.audio.pause();
    ui.play.classList.add("fa-play");
    ui.play.classList.remove("fa-pause");
    isPlay=false;
}

ui.next.addEventListener("click", () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  musicPlay();
});

ui.prev.addEventListener("click", ()=>{
  player.previous();
  let music = player.getMusic();
  displayMusic(music);
  isPlay=false;
  musicPlay();
}); 

var currentTimeValue=0;
var durationTime=0;

//! loadeddata yuklenmeden audio bilgilerini cekemeyiz
ui.audio.addEventListener("loadeddata", ()=>{
  setTime();
  
});

ui.audio.addEventListener("timeupdate", ()=>{
  setTime()
})

function setTime(){
  durationTime= ui.audio.duration;
  currentTimeValue= ui.audio.currentTime;
  ui.currentTime.innerHTML = rangeTime(currentTimeValue);
  ui.totalTime.innerHTML = rangeTime(durationTime);
  progressBar()
}

function setMinute(time){
  let minute = Math.floor(time/60);
  return minute<10 ? `0${minute}`:minute;
}

function setSecond(time){
  let second = Math.floor(time%60);
  return second<10 ? `0${second}`:second;
}

function rangeTime(time){
  return `${setMinute(time)}:${setSecond(time)}`
}

function progressBar(){
  ui.bar.max = durationTime;
  ui.bar.value = currentTimeValue;
}

ui.bar.addEventListener("input", ()=>{
  ui.currentTime.innerHTML = rangeTime(ui.bar.value)
  ui.audio.currentTime = ui.bar.value;
})

var valumeIsOn=true;
ui.valumeIcon.addEventListener("click", ()=>{
  if(valumeIsOn){
    ui.valumeIcon.classList = "fa-solid fa-volume-xmark";
    ui.audio.muted=true;
    valumeIsOn =false
  }else{
    ui.valumeIcon.classList="fa-solid fa-volume-high";
    ui.audio.muted=false;
    valumeIsOn=true
  }
})

ui.valumeRange.addEventListener("input", ()=>{
  ui.audio.volume = ui.valumeRange.value/100;
  if (ui.audio.volume==0){
    ui.valumeIcon.classList = "fa-solid fa-volume-xmark";
    ui.audio.muted=true;
  }
  else{
    ui.valumeIcon.classList="fa-solid fa-volume-high";
    ui.audio.muted=false;
  }
})

const displayMusicList =(list)=>{
  list.forEach(element => {
    let rnd = Math.floor(Math.random()*10000)
    let liTag = `
      <li class="list-group-item d-flex justify-content-between ">
            <span >${element.getName()}</span>
            <span class="badge bg-primary rounded-pill s-${rnd}"></span>
            <audio src="mp3/${element.file}" class="a-${rnd}"></audio>
      </li>
    `;

    ui.ul.insertAdjacentHTML("afterbegin", liTag);

    let spn = document.querySelector(`.s-${rnd}`);
    let aud = document.querySelector(`.a-${rnd}`);

    aud.addEventListener("loadeddata", ()=>{
      spn.innerHTML = rangeTime(aud.duration)
    })


    
  });
}