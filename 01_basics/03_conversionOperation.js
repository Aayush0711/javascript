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

// ********************Operations*******************************************
let value =3
let negValue= -value
//console.log(negValue);//-3

//console.log(2+2);// 4
//console.log(2-2);//0
//console.log(2*2);//4
//console.log(2**3);//8
//console.log(2/3);//0.66666666
//console.log(2%3);//2

let str1="hello"
let str2=" hitesh"
let str3= str1+str2;
console.log(str3);// hello hitesh

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(+true);//1
console.log(+"");//

// increment operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion