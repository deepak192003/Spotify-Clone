
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/9.jpg"},

]


songItem.forEach((element ,i) => {
    element.getElementsByTagName ("img") [0].src = songs[i].coverPath;
    element.getElementsByClassName ("songName")[0].innerText = songs[i].songName;
   
});

// for middle of button to pause and play

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})

// for progress bar

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt(( audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    });
  };
  


  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      //apply backticks

      audioElement.src= `songs/${songIndex+1}.mp3`;
      mastersongname.innerText=songs[songIndex-1].songName;

      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

    });
  });

  document.getElementById('after').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    
    audioElement.src= `songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })

  // for previous button

  document.getElementById('previous').addEventListener('click',()=>{
    previous.classList.remove('fa-play-circle');
    previous.classList.add('fa-pause-circle');
    if(songIndex<0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
  
    
    audioElement.src= `songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })