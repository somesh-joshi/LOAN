const prompt = require('prompt-sync')();

//Input
console.log("Input\n");
const LOAN = prompt("LOAN ");
const PAYMENT = prompt("PAYMENT ");
const BALANCE = prompt("BALANCE ");

const loan = LOAN.split(" ");
const payment = PAYMENT.split(" ");
const balance = BALANCE.split(" ");

let I = Number(loan[2])*Number(loan[3])*Number(loan[4]);//Interest

const PI = Number(loan[2])+(I/100);//Principal + Interest

const PP = 12* Number(loan[3]);//Payment Period

const PPI = PI/PP;//Principal per Payment

const PPP = Number(payment[2]);//Payment done

const BI = Number(balance[2]);//Balance Interest

//output
console.log("Output\n");    
if(PPP == NaN){
console.log(balance[0] + " " + balance[1] + " " + (PPI*BI) + " " + (PP-BI));
}
else{
console.log(balance[0] + " " + balance[1] + " " + (PPI*BI+PPP) + " " + (PP-BI));
}
