function add(num1,num2){
    console.log(num1+num2) 
}
add(1,2)


function add(num1,num2){
    let result=num1+num2;
    return result;
}
const result=add(2,3)
console.log(result)



function add(num1,num2){
    return num1+num2;
}
const result1=add(2,3)
console.log(result1)


function user(username){
    return`Hello ${username}`
}
console.log(user('king'))

// by default value
function user(username='sam'){
    return`Hello ${username}`
}
console.log(user())

function cartPrice(...price){ // here ... are called rest operators
 return price.reduce((a,b)=>{
    return a+b
 })
}
console.log(cartPrice(1000,200,388,466,300))



const myArr=[12,34,32,21]               // use others values of objects and arrays
function value(getArray){
return getArray[0]
}
console.log(value(myArr))