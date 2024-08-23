// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
BMI_Mark = markMass / (markHeight ** 2);
BMI_John = johnMass / (johnHeight ** 2);
console.log(BMI_Mark, BMI_John);
let markHigherBMI = BMI_Mark > BMI_John;
console.log(markHigherBMI);

