// Use const and let always and prefer to dont use var because of issue in block scope and functional scope
/*Data types
1.Premitive Date types
number,null,stirng,symbol,bolean,bigint,undefined
2. Non premitive Data types
Objects,Arrays and functions
 */
 
//Premitive Data Types
 const age = 33;//number
 console.log( typeof age)
 const num = null;// null
 console.log(typeof num)
 const string="king"
 console.log(typeof string)
const login=true;
console.log(typeof login)
const big= BigInt(122222222222234)
console.log(typeof big);
let name;
console.log(typeof name)

// Non premitive types
const obj={
    name:'king',
    age:30,
}
console.log(typeof obj)
const arr=[1,2,3,4,5,6,7]
console.log(typeof arr)
const func =()=>{
}
console.log( typeof func)