// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
let juliaData = [3, 5, 2, 12, 7];
let kateData = [4, 1, 15, 8, 3];
function checkDogAge(data) {
    let dataCopyJulia = data.slice();
    dataCopyJulia.shift();
    dataCopyJulia.pop();
    let dataCopy = dataCopyJulia.concat(kateData);
    dataCopy.forEach((age, i) => {
        let type = age >= 3 ? 'Adult' : 'Puppy';
        console.log(`Dog number ${i + 1} is an ${type}, and is ${age} years old`);
    });
}
checkDogAge(juliaData);