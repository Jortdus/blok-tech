require('dotenv').config()

const prompt = require('prompt-sync')();


const name = prompt('What is your steamcommunity url:  ');



// 1. Gebruikers voeren hun steam login name in
// 2. Steam resolved die naar een userID
// 3. UserID wordt opgeslagen in je eigen db __met__ login name
// 4. User data wordt opgehaald aan de hand van id en toegevoegd aan de db
// 5. Wanneer iemand opnieuw inlogd met login name wordt alle data juist opgehaald


// https://steamcommunity.com/id/jortdus