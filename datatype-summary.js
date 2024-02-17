// in javaScript
// two type of data type Primitive and non-primitive
// difference are mainly done on the basis of   how you store data in memory and how you acces your data(primitive and non-primitive(reference type))


//primitive


//primitive are call by value if you copy then whole content is copy to another location here reference of the original data is is not provided
// if you change in copy these change is not reflected in original

// 7 types:String,Number,Boolean,null,undefined,Symbol(for uniquesness),BigInt






const score =100;
const scoreVal=100.3
const loggedIn=true;
const oustsideTemp = null//(abhi koi value nhi hai)
let userEmail;
const id=Symbol('123')// output Symbol(123)
const anotherid=Symbol('123')
// console.log(id);
// console.log(id===anotherid);


const bigNumber=77777779999999999777777777888n  // bigInt



/*
javaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly
 declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type 
explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

//Reference (Non Primitive)
// in these data type  reference of memory may be provided (call by reference)

//Array,Objects,Functions


const heros=["saktiman","naagaraj","doga"];

let myobj={
    name:"hitesh",
    age:22,
}
const myFunction=function(){
    console.log("hello");
}
// console.log(typeof bigNumber)
// console.log(typeof myobj)

//++++++++++++++++++++++++++++ Memory allocation


// stack(Primitive) Memory and  Heap (Non-Primitive)
// when ever stack memory use that time we get copy
//but when ever  we use Heap memory that time we get reference of original value

let myyoutubename="rahul"
let anotherYoutubename=myyoutubename;
anotherYoutubename="chaiandcode"
 let userone={
    email:"abc@gmail.com",
    upi:"89fhhvfhn"
 }
 let userTwo=userone
 userTwo.email="rahul@google.com"
 console.log(userone)
 console.log(userTwo);
 // if we change in copy then that change will reflect in original because it is store in heap which share  the 
 // reference.


