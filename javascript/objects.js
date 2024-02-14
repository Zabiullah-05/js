//Declaration of objects in 

const obj={
    name:'king',
    'full name':'king jhon',
    age: 12,
    ['myNum']:Symbol('key1'),
}
// to change values
obj.name='john'
console.log(obj)

// to freeze object
Object.freeze(obj)
console.log(obj.name)//access value from obj
console.log(obj['name'])//access value from obj
console.log(obj['full name'])//access value from obj
console.log(obj['myNum'])

const obj2={
    name:'ali',
    age:30
}
const obj3={...obj,...obj2} 
console.log(obj3)
// object destructuring
const{name:n}=obj2;
console.log(n)
