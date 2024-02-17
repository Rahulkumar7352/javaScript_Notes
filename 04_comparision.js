// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1) // "2 " will converted into nuber tthen
// console.log("2abc">1);// false due to Number("2abc") is not a number NaN fa
// console.log(1>"2an") // false

// console.log(null>0) //false
// console.log(null==0)// false
// console.log(null>=0)// true because Number(null)=0 then 0>=0
// notes 
// the working of == and >,<,>=,<=,are different
// in == the value are checked without conversion but >,<,>=,<= in theses value are checked after conversion

// console.log(undefined>0)// false
// console.log(undefined==0)//false
// console.log(undefined>=0)// false


// strict check 
console.log("2"==2)// true check only value
console.log("2"===2)//false check data type and value both

// note on javascript and typescript
//in javaScript we will compare any datatyoe to any one like string and number but in typescript we can compare if we do type chek in javaScript no need of typeScript