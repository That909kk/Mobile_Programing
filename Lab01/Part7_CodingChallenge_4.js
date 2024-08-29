// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
let dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28);
dogs.forEach(dog => console.log(dog));

let dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
function checkEating(dog) {
    if (dog.curFood > dog.recommendedFood * 1.1) {
        console.log(`Dog is eating too much`);
    } else if (dog.curFood < dog.recommendedFood * 0.9) {
        console.log(`Dog is eating too little`);
    } else {
        console.log(`Dog is eating an okay amount`);
    }
}
checkEating(dogSarah);
let ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).flatMap(dog => dog.owners);
let ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * 0.9).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log("Is there any dog eating exactly the right amount of food?"+dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log("Is there any dog eating an okay amount of food?"+dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));
let dogsOkay = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
dogsOkay.forEach(dog => console.log(dog));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
dogsCopy.forEach(dog => console.log(dog));