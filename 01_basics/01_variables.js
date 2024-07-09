const accountId= 14444
let accountEmail="Aayush@gmail.com"
var accountPassword="12345"
accountCity= "Jaipur"
let  accountState;

//accountId= 2 //not allowed

 accountEmail="Ay@aa.com"
 accountPassword="67890"
 accountCity="Delhi"

console.log(accountId);

/*
perfer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
