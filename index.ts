import inquirer from "inquirer";

//in line no 3 say await and take all information  aur data from user

const answer = await inquirer.prompt([
  
     {message: "Enter first number", type: "number", name: "firstNumber" } ,
   
     {message: "Enter second number", type: "number", name: "secondNumber" } ,
  
   
   { message: "select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "subtraction", "multiplication", "division"]
  }
  
]);

//condition staatement
if (answer.operators === "Addition") {
console.log( answer.firstNumber + answer.secondNumber ) ;

}
else if (answer.operators === "subtraction"){
  console.log( answer.firstNumber - answer.secondNumber ) ;
}
else if (answer.operators === "multiplication"){
  console.log(answer.firstNumber * answer.secondNumber ) ;
}
else (answer.operators === "division"); {
  console.log( answer.firstNumber / answer.secondNumber ) ;
} 