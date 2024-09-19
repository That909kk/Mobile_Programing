// 1. Print numbers from 1 to 10 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// 2. Print the odd numbers less than 100 
// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
// }
// 3. Print the multiplication table with 7
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 * ${i} = ${7 * i}`);
// }
// 4. Print all the multiplication tables with numbers from 1 to 10 
// for (let i = 1; i <= 10; i++) {
//     console.log(`Bảng cửu Chương ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
// 5. Calculate the sum of numbers from 1 to 10 
    // let sum = 0;
    // for (let i = 1; i <= 10; i++) {
    //     sum += i;
    // }
    // console.log(sum);
// 6. Calculate 10! 
// let a = 1;
// for (let i = 1; i <= 10; i++) {
//     a*= i;
// }
// console.log(a);
// 7. Calculate the sum of even numbers greater than 10 and less than 30 
// let sum = 0;
// for (let i = 11; i < 30; i += 2) {
//     sum += i;
// }
// console.log(sum);
// 8. Create a function that will convert from Celsius to Fahrenheit 
// let celsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32;
// }
// console.log(celsiusToFahrenheit(32));
// 9. Create a function that will convert from Fahrenheit to Celsius 
// let fahrenheitToCelsius = (fahrenheit) => {
//     return (fahrenheit - 32) / 1.8;
// }
// console.log(fahrenheitToCelsius(89.6));
// 10. Calculate the sum of numbers in an array of numbers 
// let sum = 0;
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);
// 11. Calculate the average of the numbers in an array of numbers 
// let sum = 0;
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum / numbers.length);
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
// let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let pos = numbers.filter(number => number >= 0);
// console.log(pos);
// 13. Find the maximum number in an array of numbers 
// let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log(max);
// 14. Print the first 10 Fibonacci numbers without recursion 
// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);
// for (let i = 3; i <= 10; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }
// 15. Create a function that will find the nth Fibonacci number using recursion
// let fi = (n) => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fi(n - 1) + fi(n - 2);
// }
// console.log(fi(10));
// 16. Create a function that will return a Boolean specifying if a number is prime 
// let isPrime = (n) => {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(17));
// 17. Calculate the sum of digits of a positive integer number 
// let sum = 0;
// let number = 12345;
// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(sum);
// 18. Print the first 100 prime numbers 
// let isPrime = (n) => {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// let count = 0;
// let n = 2;
// while (count < 100) {
//     if (isPrime(n)) {
//         console.log(n);
//         count++;
//     }
//     n++;
// }
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position 
let numbers = [1, 2, 3, 4, 5];
let first = numbers.shift();
numbers.push(first);
console.log(numbers);
// 21. Rotate an array to the right 1 position 
// 22. Reverse an array 
// 23. Reverse a string 
// 24. Create a function that will merge two arrays and return the result as a new array 
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
