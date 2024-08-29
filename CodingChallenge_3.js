// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
let Dolphins = [96, 108, 89];
let Koalas = [88,91,110]
function sumArray (Arr){
    let sum=0;
    Arr.map(function(value){
        sum+= value;
    })
    return sum;
}
let Average_Dolphins = sumArray(Dolphins)/Dolphins.length;
let Average_Koalas = sumArray(Koalas)/Koalas.length;
console.log("Average Dolphins: "+Average_Dolphins+","+"Average Koalas: "+Average_Koalas);

if(Average_Dolphins>Average_Koalas){
    if(Average_Dolphins>=100){
        console.log("Dolphins win "+Average_Dolphins+" "+Average_Koalas );
    }
}else if(Average_Koalas>Average_Dolphins){
    if(Average_Koalas>=100){
        console.log("Dolphins win "+Average_Koalas+" "+Average_Dolphins );
    }
}