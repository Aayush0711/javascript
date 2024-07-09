let score ="33abc"

console.log(typeof score);// o/p string

let valueNumber = Number(score)
console.log(typeof valueNumber); // O/p number
console.log(valueNumber);// o/p  NaN

// Conversion
// "33" => 33
// "33abc" => NaN
// true => 1
// false=> 0 
// null=> 0
// undefined => NaN

let isLoggedIn= 1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // o/p true

// 1=> true: 0=> false
// "" => false
// "Aayush" => true 

let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber);// 33
console.log(typeof stringNumber);// string

