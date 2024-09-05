// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// let arr = [1, 2, 3,6,3, 4,8, 5, 6, 7, 8, 9, 10,10];
// let fn = (arr) => {
//     let set = new Set(arr);
//     return Array.from(set);
// }
// console.log(fn(arr));
// 28. Calculate the sum of first 100 prime numbers and return them in an array
// let isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// let first100Primes = () => {
//     let primes = [];
//     for (let i = 2; primes.length < 100; i++) {
//         if (isPrime(i)) primes.push(i);
//     }
//    return primes;
// }
// let arr100Primes = first100Primes();
// console.log(arr100Primes);
// let sumArr = arr100Primes.reduce((acc, cur) => acc + cur, 0);
// console.log(sumArr);
// 29. Print the distance between the first 100 prime numbers
// let isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// let first100Primes = () => {
//     let primes = [];
//     for (let i = 2; primes.length < 100; i++) {
//         if (isPrime(i)) primes.push(i);
//     }
//     return primes;
// }
// let arr100Primes = first100Primes();
// let distance = [];
// for (let i = 0; i < arr100Primes.length - 1; i++) {
//     distance.push(arr100Primes[i + 1] - arr100Primes[i]);
// }
// console.log(arr100Primes);
// console.log(distance);
// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
// let sumPositive = (a,b)=>{
//     return String(a+b) ;
// } 
// var Str = sumPositive(100,600);
// console.log(Str);
// console.log(typeof(Str));
// 31. Create a function that will return the number of words in a text
// let numOfText = (str) => {
//     return str.split(" ").length;
// };
// let text ="Le Minh That";
// console.log(numOfText(text));
// 32. Create a function that will capitalize the first letter of each word in a text
//  let text="le minh that";
//  function capitalizeFirstLetter(string) {
//     return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//  }
//  console.log(capitalizeFirstLetter(text));
 
// 33. Calculate the sum of numbers received in a comma delimited string
// let text = "1,2,3,4,5,6,7,8,9,10";
// let sumchuoi = (string) => {
//     return string.split(",").reduce((acc, cur) => acc + Number(cur), 0);
// }
// console.log(sumchuoi(text));
// 34. Create a function that returns an array with words inside a text.
let text = "Le Minh That";
let arrWords = (str) => {
    return str.split(" ");
};
console.log(arrWords(text));
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
// 36. Create a function that converts a string to an array of characters
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
// 38. Create a function that will convert an array containing ASCII codes in a string
// 39. Implement the Caesar cypher
// 40. Implement the bubble sort algorithm for an array of numbers
// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinates
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
// 44. Create a function that will convert a string containing a binary number into a
// number
// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
// 46. Find the maximum number in a jagged array of numbers or array of numbers
// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)


