const myArr= [2,3,5,32,345,54,432,32]
console.log(myArr.length)
console.log(myArr.toString())//convert into string
let tostr= String(myArr)//convert into string
console.log(tostr)
console.log(typeof tostr)
console.log(myArr.join(","))//convert into string
console.log(myArr.at(4))
console.log(myArr.pop())//skip element from last
console.log(myArr.push(23))// add ele at last
console.log(myArr.shift())// remove ele from first
console.log(myArr.unshift(21))// add ele at first
delete myArr[5] // to delete elements
const myArr2=[1,2,3,4,5,6,7]
console.log(myArr.concat(myArr2))
const nested = [[1,2,3],[2,2,3],[3,2,3]]
let newArr= nested.flat()
console.log(newArr)
console.log(myArr.splice(0,3,'3','5')) // add new ele to array
console.log(myArr.slice(0,4))
console.log(myArr2.reverse())
console.log(myArr.includes(5))
console.log(myArr2.indexOf(4))
console.log(myArr2.lastIndexOf(4))
                              
                                    // Most important array methods
  const map=myArr2.map((num)=>{
     return num*4
  })
  console.log(map)

  const filter = myArr2.filter((value)=>{
    return value>5;
  })
  console.log(filter)

  const reduce = myArr2.reduce((a,b)=>{
    return a+b
  })
  console.log(reduce)