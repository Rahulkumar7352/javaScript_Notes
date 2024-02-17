const accountId=14445553
let accountEmail="rahul@google.com";
var password="khed"
accountCity="jaipur"
let accountState;
// jb hm variable declare krke hm assign nhi krte us samaye java
//javaScript use undefined manti hai
// accountId=2  Not allowed
accountEmail="ragul@yahhoo"
password="kjjj"
accountCity="patna";
console.table([accountId,accountEmail,password,accountCity,accountState]);
var a="rohan"
{
    //this is called scope  
    var a="rahul";
    /*
    prefer not to use var
    because of issue in block scope and functional scope
    */
}
console.log(a);