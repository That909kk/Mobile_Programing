// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
var arr = [1, 2, 3,6,3, 4,8, 5, 6, 7, 8, 9, 10,10];
var fn = (arr) => {
    var set = new Set(arr);
    return Array.from(set);
}
console.log(fn(arr));
// 28. Calculate the sum of first 100 prime numbers and return them in an array
var isPrime = (num) => {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
var first100Primes = () => {
    var primes = [];
    for (var i = 2; primes.length < 100; i++) {
        if (isPrime(i)) primes.push(i);
    }
   return primes;
}
var arr100Primes = first100Primes();
console.log(arr100Primes);
var sumArr = arr100Primes.reduce((acc, cur) => acc + cur, 0);
console.log(sumArr);
// 29. Print the distance between the first 100 prime numbers
var isPrime = (num) => {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
var first100Primes = () => {
    var primes = [];
    for (var i = 2; primes.length < 100; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}
var arr100Primes = first100Primes();
var distance = [];
for (var i = 0; i < arr100Primes.length - 1; i++) {
    distance.push(arr100Primes[i + 1] - arr100Primes[i]);
}
console.log(arr100Primes);
console.log(distance);
// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
var sumPositive = (a,b)=>{
    return String(a+b) ;
} 
var Str = sumPositive(100,600);
console.log(Str);
console.log(typeof(Str));
// 31. Create a function that will return the number of words in a text
var numOfText = (str) => {
    return str.split(" ").length;
};
var text ="Le Minh That";
console.log(numOfText(text));
// 32. Create a function that will capitalize the first varter of each word in a text
 var text="le minh that";
 function capitalizeFirstvarter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 }
 console.log(capitalizeFirstvarter(text));
 
// 33. Calculate the sum of numbers received in a comma delimited string
var text = "1,2,3,4,5,6,7,8,9,10";
var sumchuoi = (string) => {
    return string.split(",").reduce((acc, cur) => acc + Number(cur), 0);
}
console.log(sumchuoi(text));
// 34. Create a function that returns an array with words inside a text.
var text = "Le Minh That";
var arrWords = (str) => {
    return str.split(" ");
};
console.log(arrWords(text));
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
var text = "a,b,c,d\ne,f,g,h\ni,j,k,l";
var csvToBiArray = (text) => {
    return text.split("\n").map(row => row.split(","));
}
csvToBiArray(text).forEach(row => console.log(row));
console.log(csvToBiArray(text));
// 36. Create a function that converts a string to an array of characters
var text = "Le Minh That";
var strToArr = (str) => {
    return str.split("");
};
console.log(strToArr(text));
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
var text = "Le Minh That";
var strToASCII = (str) => {
    return str.split("").map(char => char.charCodeAt(0));
};
console.log(strToASCII(text));
// 38. Create a function that will convert an array containing ASCII codes in a string
var arr = [76, 101, 32, 77, 105, 110, 104, 32, 84, 104, 97, 116];
var asciiToStr = (arr) => {
    return arr.map(code => String.fromCharCode(code)).join("");
};
console.log(asciiToStr(arr));
// 39. Implement the Caesar cypher
var text = "Le Minh That";
var cyperCaesar = (str, shift) => {
    return str.split("").map(char => {
        var code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            code = ((code - 65 + shift) % 26) + 65;
        } else if (code >= 97 && code <= 122) {
            code = ((code - 97 + shift) % 26) + 97;
        }
        return String.fromCharCode(code);
    }).join("");
}
console.log(cyperCaesar(text, 3));
// 40. Implement the bubble sort algorithm for an array of numbers
var arr = [43,234,3423,658,234765,768,21,56,8,9,3,12321,4566,324,843  ];
var bubbleSort = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
var distance = (point1, point2) => {
    var x = point1[0] - point2[0];
    var y = point1[1] - point2[1];
    return Math.sqrt(x * x + y * y);
}
console.log(distance(arr[0], arr[1]));
console.log(distance(arr[0], arr[2]));
console.log(distance(arr[1], arr[2]));
// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
 var circle1 = {
     center: [1, 1],
     radius: 3
 };
  var circle2 = {
      center: [2, 3],
      radius: 2
  };
  var areIntersecting = (circle1, circle2) => {
      var distance = Math.sqrt((circle1.center[0] - circle2.center[0]) ** 2 + (circle1.center[1] - circle2.center[1]) ** 2);
      return distance < circle1.radius + circle2.radius;
  }
  console.log(areIntersecting(circle1, circle2));
// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var extractColumn = (arr, col) => {
    return arr.map(row => row[col]);
}
console.log(extractColumn(arr, 1));
// 44. Create a function that will convert a string containing a binary number into a number
var num = "101010101";
var binToNum = (str) => {
    return parseInt(str, 2);
}
console.log(binToNum(num));
// 45. Create a function to calculate the sum of all the numbers in a jagged array(contains numbers or other arrays of numbers on an unlimited number oflevels)
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var sumJagged = (arr) => {
    return arr.flat(Infinity).reduce((acc, cur) => acc + cur, 0);
}
console.log(sumJagged(arr));
// 46. Find the maximum number in a jagged array of numbers or array of numbers
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var maxJagged = (arr) => {
    return Math.max(...arr.flat(Infinity));
}
console.log(maxJagged(arr));
// 47. Deep copy a jagged array with numbers or other arrays in a new array
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var deepCopy = (arr) => {
    return JSON.parse(JSON.stringify(arr));
}
var arrCopy = deepCopy(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arrCopy[i]);
}
// 48. Create a function to return the longest word in a string
var text = "1 con gà xòe ra 2 cái c";
var longestWord = (str) => {
    return str.split(" ").reduce((acc, cur) => acc.length >= cur.length ? acc : cur, "");
}
console.log(longestWord(text));
// 49. Shuffle an array of strings
var arr = ["Le", "Minh", "That"];
var shuffle = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffle(arr));
// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
var n = 100;
var randomNumbers = (n) => {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(randomNumbers(n));
// 51. Find the frequency of varters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: varter and number of occurrences.
var text = "Le Minh That";
var frequencyvarters = (str) => {
    var obj = {};
    for (var char of str) {
        if (char !== " ") {
            obj[char] = obj[char] ? obj[char] + 1 : 1;
        }
    }
    return Object.entries(obj);
}
frequencyvarters(text).forEach(arr => console.log(arr));
// 52. Calculate Fibonacci(500) with high precision (all digits)
var fi = 500;
var fibonacci =(n)=>{
    var arr = [0n, 1n];
    for (var i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}
console.log(fibonacci(fi).toString());
// 53. Calculate 70! with high precision (all digits)
var n = 70;
var factorial = (n) => {
    var result = 1n;
    for (var i = 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(n).toString());


