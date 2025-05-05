import jsonData from './music-configuration.json' with { type: "json" };

// 2nd way to access data from json file:

// let playlist;

// fetch('./music-configuration.json')
// .then((response) => { // response = raw data; Response object
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.json(); // parses the raw data and convert it into understandable json format
// })
// .then(data => {
//     playlist = data;
//     console.log(playlist);
// })
// .catch(error => console.error('Failed to fetch data:', error));'

let currentAudioIndex = 0;
const keysInJsonData = Object.keys(jsonData);

// using indexHTML is fine here as the data is coming from a trusted source
const parentListElement = document.querySelector('.playlist');
let childListElement = '';

const audioElement = document.getElementById('audio');
const previousButton = document.getElementById('prev');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume');

for(const i in jsonData) {
  const imagePath = jsonData[i].cardImg || './assets/musicCards/fallback.jpeg';
  childListElement += `<li><button><img src=${imagePath} alt=${i} id=${i} /></button></li>`;
}

parentListElement.innerHTML = childListElement;
const playlistElement = parentListElement.querySelectorAll('button');

function loadSong(id) {
  const currentMusicCard = document.querySelector('.current-music-card');
  const currentMusicImg = currentMusicCard.querySelector('img');
  const newMusicImg = document.createElement('img');

  newMusicImg.src = jsonData[id].cardImg || './assets/musicCards/fallback.jpeg';
  newMusicImg.alt = id;

  if (currentMusicImg) {
    currentMusicCard.replaceChild(newMusicImg, currentMusicImg); // replacing the existing card
  } else {
    currentMusicCard.appendChild(newMusicImg);
  }

  audioElement.src = jsonData[id].path;

  previousButton.disabled = currentAudioIndex === 0;
  nextButton.disabled = currentAudioIndex === keysInJsonData.length - 1;
}

loadSong(keysInJsonData[currentAudioIndex]);

playlistElement.forEach((elt) => {
  elt.addEventListener('click', (event) => {
    const selectedAudioId = event.target.id;
    currentAudioIndex = keysInJsonData.indexOf(selectedAudioId);
    loadSong(selectedAudioId);
    playAudio();
  });
})


function playAudio() {
  audioElement.play();
  const pauseImgSource = './assets/controls/pause.png'
  playButton.innerHTML = `<img src=${pauseImgSource} />`; // trustworthy source
}

function pauseAudio() {
  audioElement.pause();
  const playImgSource = './assets/controls/play.png'
  playButton.innerHTML = `<img src=${playImgSource} />`;
}

playButton.addEventListener('click', () => {
  if (audioElement.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

previousButton.addEventListener('click', () => {
  --currentAudioIndex;
  loadSong(keysInJsonData[currentAudioIndex]);
  playAudio();
});

nextButton.addEventListener('click', () => {
  ++currentAudioIndex;
  loadSong(keysInJsonData[currentAudioIndex]);
  playAudio();
});

volumeSlider.addEventListener('input', (event) => {
  audioElement.volume = event.target.value;
});

