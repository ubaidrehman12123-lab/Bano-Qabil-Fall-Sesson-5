// 1) Create a program that takes a number from 1 to 7 and prints the corresponding day of the week using switch.
console.log('Create a program that takes a number from 1 to 7 and prints the corresponding day of the week using switch.');

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number.");
}


// 2) Create a program that takes a number from 1 to 12 and prints the corresponding month using switch.
console.log('Create a program that takes a number from 1 to 12 and prints the corresponding month using switch.');

let month = 8;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month number.");
}


// 3) Create a calculator using switch that performs addition, subtraction, multiplication, and division based on the selected operator.
console.log('Create a calculator using switch that performs addition, subtraction, multiplication, and division based on the selected operator.');

let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Addition:", num1 + num2);
        break;

    case "-":
        console.log("Subtraction:", num1 - num2);
        break;

    case "*":
        console.log("Multiplication:", num1 * num2);
        break;

    case "/":
        if (num2 !== 0) {
            console.log("Division:", num1 / num2);
        } else {
            console.log("Cannot divide by zero.");
        }
        break;

    default:
        console.log("Invalid operator.");
}


// 4) Take a number from 1 to 5 and print the corresponding number in words using switch.
console.log('Take a number from 1 to 5 and print the corresponding number in words using switch.');

let number = 4;

switch (number) {
    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    case 4:
        console.log("Four");
        break;

    case 5:
        console.log("Five");
        break;

    default:
        console.log("Invalid number.");
}


// 5) Create a program that takes a grade (A, B, C, or D) and prints a message for each grade using switch.
console.log('Create a program that takes a grade (A, B, C, or D) and prints a message for each grade using switch.');

let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent performance!");
        break;

    case "B":
        console.log("Very good performance!");
        break;

    case "C":
        console.log("Good performance!");
        break;

    case "D":
        console.log("Needs improvement.");
        break;

    default:
        console.log("Invalid grade.");
}


// 6) Create a program that takes a traffic light color (red, yellow, or green) and prints the appropriate action using switch.
console.log('Create a program that takes a traffic light color (red, yellow, or green) and prints the appropriate action using switch.');

let color = "red";

switch (color) {
    case "red":
        console.log("Stop.");
        break;

    case "yellow":
        console.log("Wait and prepare to stop.");
        break;

    case "green":
        console.log("Go if the road is clear.");
        break;

    default:
        console.log("Invalid traffic light color.");
}