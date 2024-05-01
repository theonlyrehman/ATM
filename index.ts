#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Cash
let myPin = 4321; // PIN

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter a pin",
    type: "number"
  }
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select Option:",
      type: "list",
      choices: ["Withdrawl", "Check Balance"]
    }
  ]);

  console.log(operationAns);

  if(operationAns.operation === "Withdrawl") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is " + myBalance);
  } else if (operationAns.operation === "Check Balance") {
    console.log("Your Balance Is " + myBalance);
  }
} else {
  console.log("Incorrect Pin Code !");
}
