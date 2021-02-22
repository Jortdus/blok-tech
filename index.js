// require('dotenv').config()
// const SteamAPI = require('steamapi');
// const prompt = require('prompt-sync')();
// const steam = new SteamAPI(process.env.STEAMAPI);


// const name = prompt('What is your steamcommunity url:  ');

// steam.resolve(`${name}`).then(id => {

//     console.log(id);
//     steam.getUserRecentGames(id).then(recentGames => {
//         for (var i = 0; i < recentGames.length; ++i) {
//             console.log(Math.floor(recentGames[i].playTime / 60));
//         }
//         console.log(recentGames);
        
//     });
// });