// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
let Dolphins=[85,54,41];
let Koalas= [23,34,27];
var Average_Dolphins;
var Average_Koalas;
function calcAverage (Arr){
    let sum =0;
    for (let i=0;i<Arr.length;i++){
        sum+=Arr[i];
    }
    return sum/Arr.length;
}
Average_Dolphins=calcAverage(Dolphins);
Average_Koalas=calcAverage(Koalas);
console.log(Average_Dolphins,Average_Koalas);
function checkWinner(Average_Dolphins,Average_Koalas){
    if(Average_Dolphins>=2*Average_Koalas){
        console.log(`Dolphins win `+Average_Dolphins+":" +Average_Koalas);
    }
    else if(Average_Koalas>=2*Average_Dolphins){
        console.log(`Koalas win `+Average_Koalas+":" + Average_Dolphins);
    }
    else{
        console.log("No team wins");
    }
}
checkWinner(Average_Dolphins,Average_Koalas);