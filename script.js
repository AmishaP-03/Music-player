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
// .catch(error => console.error('Failed to fetch data:', error));
