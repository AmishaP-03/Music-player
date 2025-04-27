import jsonData from './music-configuration.json' with { type: "json" };

// 2nd way to access data from json file:

// let playlist;

// fetch('./music-configuration.json')
// .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.json();
// })
// .then(data => {
//     playlist = data;
//     console.log(playlist);
// })
// .catch(error => console.error('Failed to fetch data:', error));'


// using indexHTML is fine here as the data is coming from a trusted source
const parentListElement = document.querySelector('.playlist');
let childListElement = '';

for(const i in jsonData) {
  const imagePath = jsonData[i].cardImg || './assets/musicCards/fallback.jpeg';
  childListElement += `<li><button><img src=${imagePath} alt=${i} /></button></li>`;
}

parentListElement.innerHTML = childListElement;

function loadSong(id) {
  const currentMusicCard = document.querySelector('.current-music-card');
  const imgElement = document.createElement('img');

  imgElement.src = jsonData[id].cardImg || './assets/musicCards/fallback.jpeg';
  imgElement.alt = id;

  currentMusicCard.appendChild(imgElement);
  musicPlayerSection.appendChild(currentMusicCard); // Using apendChild so as to not overwrite other content in a cleaner fashion
}

loadSong('MSC1');

