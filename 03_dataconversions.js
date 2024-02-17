let score=33
let score1="33abc"

//problem 
//if we are receving value from backend that time we donot know about the data type 

// const {score}=req.body;// no guarantee of score is number or string
 console.log(typeof score);// number n smaller
 console.log(typeof(score))

 console.log(typeof score1);
 console.log(typeof(score1))

 let valueInNumber=Number(score1) // N capital here
 console.log(typeof valueInNumber);
 console.log(valueInNumber); // NaN because  not a number 33abc not pure number
 console.log(typeof(Number(null)))// 0 tempreture wala case in datatype
 //


 //"33" =>33
 // "33abc" => NaN(not a number but its type is number)
 // true => 1; false =>0;

 let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);

 // boolean
 // 1 => true; 0 => false;
// "" => false 
// "rahul" => true;

let someNumber = 33
let stringNumber = String(someNumber);
 console.log(typeof stringNumber);



