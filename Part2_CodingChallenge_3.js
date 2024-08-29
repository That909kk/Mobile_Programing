// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
let Mark={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
}
let John={
    fullName:"John Smith",
    mass:92,
    height:1.95,
}
function calcBMI(mass,height){
    return mass/(height**2);
}
Mark.BMI=calcBMI(Mark.mass,Mark.height);
John.BMI=calcBMI(John.mass,John.height);
console.log(Mark.BMI>John.BMI?Mark.fullName+"'s BMI "+"("+Mark.BMI+")"+"is higher than "+
    John.fullName+"'s":John.fullName+"'s BMI "+"("+John.BMI+")"+"is higher than "
    +Mark.fullName+"'s");