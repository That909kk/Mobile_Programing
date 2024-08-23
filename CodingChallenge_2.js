// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
BMI_Mark = markMass / (markHeight ** 2);
BMI_John = johnMass / (johnHeight ** 2);
if(BMI_Mark>BMI_John){
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`);

}
else console.log(`John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`);
