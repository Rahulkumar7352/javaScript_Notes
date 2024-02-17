// const name=Rahul;
// console.log(name); gives error
// // console.log(typeof name)


//declaration of string behind the scene it is invoking object 
const name="hitesh"

const repoCount = 50

// outdated
// console.log(name+repoCount+" Value");


// Modernday Syntax
//backticks provide String interpolation
//  console.log(`hello my name is ${name} and my repoCOunt is ${ repoCount}`)
//  // another method of string declration using javascript object

 const gameName=new String('Rahul-Kumar');
//  console.log(gameName[8]);// undefined
//  console.log(gameName[0])//Rahul
//  console.log(gameName.__proto__)//{}
//  console.log(gameName.prototype) // undefined we can't do like this

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
// console.log(gameName.lastIndexOf("Kumar"))




// substring
//str="nrfjkvnrjbkj"
// str.substring(indexStart)
// str.substring(indexStart, indexEnd)

const newString = gameName.substring(0,4);
// console.log(newString);


//slice

let anotherstring = gameName.slice(-199,4)
// console.log("hello")
console.log(anotherstring)
// console.table([gameName[-1],gameName[4]]);

const text = "Mozilla";
const spliceVal=text.slice(-10,4);
console.log(spliceVal);
const newStringss=" Rahul    "
console.log(newStringss);
console.log(newStringss.trim());

/**
 The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
 The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. 
 The original string is left
 */
const url = "https://rahul.com/rahul%20kumar";

const replacedval=url.replace('%20','-')// https://rahul.com/rahul-kumar
console.log(replacedval)

console.log(url.includes('rahul'));

let arr=url.split('%');
 console.log(arr);//[ 'https://rahul.com/rahul', '20kumar' ]












/*
**The difference between substring() and substr()
There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

 ** The two parameters of substr() are start and length, while for substring(), they are start and end.
substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
** Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.
Furthermore, substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.


                              ##################################################################################
Differences between substring() and slice()
The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"

*/
