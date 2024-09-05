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
// let text = "Le Minh That";
// let arrWords = (str) => {
//     return str.split(" ");
// };
// console.log(arrWords(text));
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
// let text = "a,b,c,d\ne,f,g,h\ni,j,k,l";
// let csvToBiArray = (text) => {
//     return text.split("\n").map(row => row.split(","));
// }
// csvToBiArray(text).forEach(row => console.log(row));
// console.log(csvToBiArray(text));
// 36. Create a function that converts a string to an array of characters
// let text = "Le Minh That";
// let strToArr = (str) => {
//     return str.split("");
// };
// console.log(strToArr(text));
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
// let text = "Le Minh That";
// let strToASCII = (str) => {
//     return str.split("").map(char => char.charCodeAt(0));
// };
// console.log(strToASCII(text));
// 38. Create a function that will convert an array containing ASCII codes in a string
// let arr = [76, 101, 32, 77, 105, 110, 104, 32, 84, 104, 97, 116];
// let asciiToStr = (arr) => {
//     return arr.map(code => String.fromCharCode(code)).join("");
// };
// console.log(asciiToStr(arr));
// 39. Implement the Caesar cypher
// let text = "Le Minh That";
// let cyperCaesar = (str, shift) => {
//     return str.split("").map(char => {
//         let code = char.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             code = ((code - 65 + shift) % 26) + 65;
//         } else if (code >= 97 && code <= 122) {
//             code = ((code - 97 + shift) % 26) + 97;
//         }
//         return String.fromCharCode(code);
//     }).join("");
// }
// console.log(cyperCaesar(text, 3));
// 40. Implement the bubble sort algorithm for an array of numbers
// let arr = [43,234,3423,658,234765,768,21,56,8,9,3,12321,4566,324,843  ];
// let bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr));
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// let distance = (point1, point2) => {
//     let x = point1[0] - point2[0];
//     let y = point1[1] - point2[1];
//     return Math.sqrt(x * x + y * y);
// }
// console.log(distance(arr[0], arr[1]));
// console.log(distance(arr[0], arr[2]));
// console.log(distance(arr[1], arr[2]));
// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
//  let circle1 = {
//      center: [1, 1],
//      radius: 3
//  };
//   let circle2 = {
//       center: [2, 3],
//       radius: 2
//   };
//   let areIntersecting = (circle1, circle2) => {
//       let distance = Math.sqrt((circle1.center[0] - circle2.center[0]) ** 2 + (circle1.center[1] - circle2.center[1]) ** 2);
//       return distance < circle1.radius + circle2.radius;
//   }
//   console.log(areIntersecting(circle1, circle2));
// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let extractColumn = (arr, col) => {
//     return arr.map(row => row[col]);
// }
// console.log(extractColumn(arr, 1));
// 44. Create a function that will convert a string containing a binary number into a number
// let num = "101010101";
// let binToNum = (str) => {
//     return parseInt(str, 2);
// }
// console.log(binToNum(num));
// 45. Create a function to calculate the sum of all the numbers in a jagged array(contains numbers or other arrays of numbers on an unlimited number oflevels)
// let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// let sumJagged = (arr) => {
//     return arr.flat(Infinity).reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sumJagged(arr));
// 46. Find the maximum number in a jagged array of numbers or array of numbers
let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let maxJagged = (arr) => {
    return Math.max(...arr.flat(Infinity));
}
console.log(maxJagged(arr));

// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)


