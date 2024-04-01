#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "Number",
    name: "firstNumber",
  },
  {
    message: "Enter SecondNumber",
    type: "Number",
    name: "SecondNumber",
  },
  { message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.SecondNumber)
}
else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.SecondNumber);
} else{
    console.log("Please select valid operator")
}
