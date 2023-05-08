// Task 1

const fruits = ["apple", "banana",
"cherry", "date"]

console.log(fruits);

// Task 2 

fruits.push("elderberry");
console.log(fruits);

// Task 3

fruits.shift();
console.log(fruits);

// Task 4

 let fruitsString= fruits.join(",");
console.log(fruitsString);

// Task 5

const numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers);

/*
let nubString = nubers.join(",");
console.log(nubString)
*/

// task 6

numbers.sort();
console.log(numbers);

// Task 7 

numbers.reverse();
console.log(numbers);

// Task 8
 
let subNumbers = numbers.slice(2,5);
console.log(subNumbers)

// Task 9

numbers.splice(2,1);
console.log(numbers);

// Challenges 1

 const newarray = numbers.map(function(num){
    return num **2
 })

 console.log(newarray)

 // Challenges 2

 const newarray1 = numbers.filter(function(num){
    return num % 2===0;
 })
console.log(newarray1)

// Callanges 3 

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);
 
