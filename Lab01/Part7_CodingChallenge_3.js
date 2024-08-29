// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
let Data1 = [5, 2, 4, 1, 15, 8, 3];
let Data2 = [16, 6, 10, 5, 6, 1, 4];
let convertDogAge=(data) => {
    let humanAge = data.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    console.log("Average human age of dogs is: " + humanAge);
}
convertDogAge(Data1);
convertDogAge(Data2);