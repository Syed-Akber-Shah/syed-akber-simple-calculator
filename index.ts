#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Type first number here",type: "number", name: "firstNumber"},
{message: "Type second number here", type: "number", name: "secondNumber"},
{message: "Select one of the Operators", type: "list", name: "operator", choices: ["Addition","Subtraction","Multiplication","Division","Exponentiation","Modulus"],
},
]);

// conditional statement
// Note!!!
// 1. is waly part mein jahan if aur else if k program mein "= equal to sign" jahan jahan 3 times use kiya hai wahan wahan agar 2 times bhi use krlengy tab bhi koi farq nahi prega.
// 2. upar waly part mein const answer = await inquirer.prompt ke program jahan name diye hain hum ny "firstNumber" aur "secondNumber" to nichy ye waly part mein if aur else if ke program mein bhi bilkul same format mein hi name likhny hongy agar is point py akar spelling mistake krengy ya kisi bhi waja se name change ho gya by mistake to "NaN Not a Number" ye wala "error" ajayega aur calculator answer nahi dega.

if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else if(answer.operator === "Exponentiation"){
    console.log(answer.firstNumber ** answer.secondNumber)
}
else if(answer.operator === "Modulus"){
    console.log(answer.firstNumber % answer.secondNumber)
}

else {console.log("Please Perform Valid Action")}

console.log("Good Day!")