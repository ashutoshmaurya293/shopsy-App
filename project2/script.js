let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let player = document.getElementById("masterPlay");
let bar = document.getElementById("bar");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songName: "o sathi", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
  { songName: "o satgthi", filePath: "song2/.mp3", coverPath: "cover2.jpg" },
  { songName: "o sawrythi", filePath: "song3/.mp3", coverPath: "cover3.jpg" },
  { songName: "o saywtthi", filePath: "song4/.mp3", coverPath: "cover4.jpg" },
  { songName: "o sasytythi", filePath: "song5/.mp3", coverPath: "cover5.jpg" },
  { songName: "o sayrtthi", filePath: "song6/.mp3", coverPath: "cover6.jpg" },
  { songName: "o sawyrtthi", filePath: "song7/.mp3", coverPath: "cover7.jpg" },
];
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
  masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener('timeupdate', ()=>{ 
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  bar.value = progress;
});

bar.addEventListener('change', ()=>{
  audioElement.currentTime = bar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.play();

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.play();
})