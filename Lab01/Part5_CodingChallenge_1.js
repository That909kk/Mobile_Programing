// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
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
let [players1,players2]=game.players;
let [gk,...fieldPlayers]=players1;
let allPlayers=[...players1,...players2];
let players1Final=[...players1,"Thiago","Coutinho","Perisic"];
let {team1,x:draw,team2}=game.odds;
function printGoals(...players){
    console.log(players.length+" goals were scored");
}
printGoals("Davies","Muller","Lewandowski","Kimmich");
printGoals(...game.scored);
team1<team2&&console.log("Team 1 is more likely to win");
team1>team2&&console.log("Team 2 is more likely to win");
