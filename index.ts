#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 5 + 1);

console.log("Welcome To Number Guessing Game");

const answers = await inquirer.prompt([
    {
        message : "Please guess a number  b/w 1 to 5: ",
        name : "userGuessNumber",
        type : "number",

    }
])
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number : ");
    
}

else {
    console.log(" Oops ! You guessed the wrong number :");
    
}


    