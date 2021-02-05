const SteamAPI = require('steamapi');
const prompt = require('prompt-sync')();
const steam = new SteamAPI('AB215664B92B6F3A44AEDEEEC12E0778');


const name = prompt('What is your steamcommunity url:  ');

steam.resolve(`${name}`).then(id => {

    console.log(id);
    steam.getUserRecentGames(id).then(recentGames => {
        console.log(recentGames[0]);
    });
});