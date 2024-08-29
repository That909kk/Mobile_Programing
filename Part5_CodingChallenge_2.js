// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
let game={
    team1:"Bayern Munich",
    team2:"Borrussia Dortmund",
    players:[
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score:"4:0",
    scored:["Lewandowski","Gnarby","Lewandowski","Hummels"],
    date:"Nov 9th, 2037",
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.25,
    },
}
for (const [i,player] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${player}`);
}
let odds=Object.values(game.odds);
let average=odds.reduce((a,b)=>a+b,0)/odds.length;
console.log(average);
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
let scorers={};
for (const player of game.scored){
    scorers[player]=scorers[player]?scorers[player]+1:1;
}
console.log(scorers);


