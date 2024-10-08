// 1. Print numbers from 1 to 10 
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// 2. Print the odd numbers less than 100 
for (var i = 1; i < 100; i += 2) {
    console.log(i);
}
// 3. Print the multiplication table with 7
for (var i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
// 4. Print all the multiplication tables with numbers from 1 to 10 
for (var i = 1; i <= 10; i++) {
    console.log(`Bảng cửu Chương ${i}`);
    for (var j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// 5. Calculate the sum of numbers from 1 to 10 
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);
// 6. Calculate 10! 
var a = 1;
for (var i = 1; i <= 10; i++) {
    a*= i;
}
console.log(a);
// 7. Calculate the sum of even numbers greater than 10 and less than 30 
var sum = 0;
for (var i = 11; i < 30; i += 2) {
    sum += i;
}
console.log(sum);
// 8. Create a function that will convert from Celsius to Fahrenheit 
var celsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32;
}
console.log(celsiusToFahrenheit(32));
// 9. Create a function that will convert from Fahrenheit to Celsius 
var fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
}
console.log(fahrenheitToCelsius(89.6));
// 10. Calculate the sum of numbers in an array of numbers 
var sum = 0;
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
// 11. Calculate the average of the numbers in an array of numbers 
var sum = 0;
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum / numbers.length);
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
var numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var pos = numbers.filter(number => number >= 0);
console.log(pos);
// 13. Find the maximum number in an array of numbers 
var numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);
// 14. Print the first 10 Fibonacci numbers without recursion 
var a = 0;
var b = 1;
var c;
console.log(a);
console.log(b);
for (var i = 3; i <= 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
// 15. Create a function that will find the nth Fibonacci number using recursion
var fi = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fi(n - 1) + fi(n - 2);
}
console.log(fi(10));
// 16. Create a function that will return a Boolean specifying if a number is prime 
var isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(17));
// 17. Calculate the sum of digits of a positive integer number 
var sum = 0;
var number = 12345;
while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log(sum);
// 18. Print the first 100 prime numbers 
var isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
var count = 0;
var n = 2;
while (count < 100) {
    if (isPrime(n)) {
        console.log(n);
        count++;
    }
    n++;
}
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position 
var numbers = [1, 2, 3, 4, 5];
var first = numbers.shift();
numbers.push(first);
console.log(numbers);
// 21. Rotate an array to the right 1 position 
var numbers = [1, 2, 3, 4, 5];
var last = numbers.pop();
numbers.unshift(last);
console.log(numbers);
// 22. Reverse an array 
var numbers = [1, 2, 3, 4, 5];
var reversed = [];
for (var i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log(reversed);
// 23. Reverse a string 
var str = "Hello";
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);
// 24. Create a function that will merge two arrays and return the result as a new array 
var merge = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(merge([1, 2, 3], [4, 5, 6]));
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
var merge = (arr1, arr2) => {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}
console.log(merge([1, 2, 3], [2, 3, 4])); 
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
var merge = (arr1, arr2) => {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}
console.log(merge([1, 2, 3], [2, 3, 4]));
