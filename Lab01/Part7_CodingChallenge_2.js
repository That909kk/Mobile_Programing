// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
let Data1 = [5,2,4,1,15,8,3];
let Data2 = [16,6,10,5,6,1,4];
let humanAge ;
function convertDogAge(data) {
    let humanAge = data.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    let needAge = humanAge.filter(age => age >= 18);
    let averageAge = needAge.reduce((acc, age) => acc + age, 0) / needAge.length;
    console.log("Average human age of dogs is: " + averageAge);
    
};
convertDogAge(Data1);
convertDogAge(Data2);