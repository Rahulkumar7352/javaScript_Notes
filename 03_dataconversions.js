// let score=33
// let score1="33abc"

// //problem 
// //if we are receving value from backend that time we donot know about the data type 

// // const {score}=req.body;// no guarantee of score is number or string
//  console.log(typeof score);// number n smaller
//  console.log(typeof(score))

//  console.log(typeof score1);
//  console.log(typeof(score1))

//  let valueInNumber=Number(score1) // N capital here
//  console.log(typeof valueInNumber);
//  console.log(valueInNumber); // NaN because  not a number 33abc not pure number
//  console.log(typeof(Number(null)))// 0 tempreture wala case in datatype
//  //


 //"33" =>33
 // "33abc" => NaN(not a number but its type is number)
 // true => 1; false =>0;

//  let isLoggedIn=1;
// let booleanIsLoggedIn=Boolean(isLoggedIn);

 // boolean
 // 1 => true; 0 => false;
// "" => false 
// "rahul" => true;

// let someNumber = 33
// let stringNumber = String(someNumber);
//  console.log(typeof stringNumber);


// ******************************************* OPERATIONS **********************************************
let value = 3
let negValue = -value
//  console.log(typeof negValue) // number
//  console.log(negValue)// -3

//  console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3); // 2 to the power 3 mean 8
//  console.log(-6/2); -3

//  console.log(6/2);// 3
//  console.log(-7%2); //-1
//  console.log(7%(-2))// 1
//  console.log((-7)%(-2)) //-1
//  console.log(7//2) in js this is not operator


let str1 ="hello"
let str2= " kya batt";
// console.log(str1+str2);


// console.log("1"+2) // 12 string
// console.log(1+"2") // 12 string
// console.log("1"+2+2) // 122 string like pahle string then add like string 
// console.log(1+2+"2") // 32 string

// console.log(+true); //1
// console.log(true+) // error
console.log(+false)// 0
// console.log(+"");// 0
// console.log(""+)// error

let num1,num2,num3
// num1=num2=num3=2+2 not good try code readibility

let gameCounter=100;
console.log(gameCounter++)//100 use hone ke baad update
console.log(++gameCounter)//101 use krne se pahle update

// link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment