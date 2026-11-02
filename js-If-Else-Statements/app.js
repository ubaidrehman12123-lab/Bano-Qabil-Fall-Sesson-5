// 1) Take a number and check whether it is positive or negative.
console.log('Take a number and check whether it is positive or negative.');

let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// 2) Take a number and check whether it is even or odd.
console.log('Take a number and check whether it is even or odd.');

let num = 7;

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


// 3) Take a student's marks and check whether the student has passed or failed. Passing marks are 50.
console.log("Take a student's marks and check whether the student has passed or failed. Passing marks are 50.");

let marks = 65;

if (marks >= 50) {
    console.log("The student has passed.");
} else {
    console.log("The student has failed.");
}


// 4) Take a person's age and check whether they are eligible to vote. The minimum age is 18.
console.log("Take a person's age and check whether they are eligible to vote. The minimum age is 18.");

let age = 20;

if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}


// 5) Take two numbers and print the greater number.
console.log('Take two numbers and print the greater number.');

let firstNumber = 25;
let secondNumber = 15;

if (firstNumber > secondNumber) {
    console.log("The greater number is:", firstNumber);
} else if (secondNumber > firstNumber) {
    console.log("The greater number is:", secondNumber);
} else {
    console.log("Both numbers are equal.");
}


// 6) Take a person's age and check whether they are a child, teenager, or adult.
console.log("Take a person's age and check whether they are a child, teenager, or adult.");

let personAge = 15;

if (personAge >= 0 && personAge <= 12) {
    console.log("The person is a child.");
} else if (personAge >= 13 && personAge <= 19) {
    console.log("The person is a teenager.");
} else if (personAge >= 20) {
    console.log("The person is an adult.");
} else {
    console.log("Invalid age.");
}