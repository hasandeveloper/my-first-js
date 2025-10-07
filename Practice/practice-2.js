// Primitive Data types

// string
let name = "hasan";

// number
let digit = 1;

// boolean
let isThis = false;

// null
// null mean types is null and value is empty
let isVal = null;

// undefined
// undefined means types is undefined and value is undefined
let person = undefined;

// symbol
let person1 = Symbol("id")

// Non primitive types

let obj = {
    name: "hasan",
    age: 31
}

let arr = [1,2,3]

let hello = () => {
    return "hello hasan"
}

console.log(hello())

// coding challenge

function numberOfWords(str) {
    console.log( str.length )
}
let result = numberOfWords("Hello")

function longerString(str, max_length) {
    return str.length >= max_length ? false : true
}
let result1 = longerString("helloooooooo",100)
console.log(result1)

// coding challenge 1

function checkStringContainWhiteSpace(str){
   return str.trim() === str ? false : true
}
let result3 = checkStringContainWhiteSpace("hello ")
console.log(result3)





function characterSeperator(str, char){
    console.log(str.split(char).join(""))
}
let result4 = characterSeperator("hello","e")


function reverseString(str){
    console.log(str.split("").reverse().join(""))
}
let result5 = reverseString("hasan")

function repeatWord(str){
    console.log(str.repeat(str.length))
}
repeatWord("hello")
// const result3 = startWith("hello","H")
// let result4 = lastCharExists("hellow","0")

// slice
const str = "welcome to the world js";

console.log(str.slice(0,3))

// palindrome with methods
function isPalindrome(str){
    console.log(str.split("").reverse().join("") === str ? true : false)
}
let result12 = isPalindrome("121")

//reduce
const productQty = [10,20,30]

const ans = productQty.reduce((acc, currVal) => {
    return acc + currVal
})
console.log(ans)

const agesArr = [20,30,40,50]

const ans1 = agesArr.find(age => {
    return age > 40
})

console.log(ans1)

const ans2 = agesArr.filter(age => {
    return age > 10
})

console.log(ans2)

// print elements
const arr21 = [1,2,3,4,5,5,6,6]

for(let i = 0; i < arr21.length; i++){
    console.log(arr21[i])
}

// print string numbers

for(let i = 0; i < arr21.length; i++){
    console.log("this is a string number :", arr21[i])
}

// print arr in reverse order

console.log(arr21.reverse())

// print sum of arr
const ans34 = arr21.reduce((acc, currVal) => {
    return acc + currVal
})
console.log(ans34)

// print average number

function average(arr21){
    const sum = arr21.reduce((acc, currVal) => {
        return acc + currVal
    })

    const average = sum/arr21.length
    console.log(average)
}
average(arr21)

// print uniq ele

function uniq(arr){
    const formedArray = []
    for(let i = 0; i < arr.length; i++){
        if(!formedArray.includes(arr[i])){
            formedArray.push(arr[i])
        }
    }
    console.log(formedArray)
}

uniq(arr21)

// create objects

const personF = {}

personF.name = "hasan"
personF.age = 31
console.log(personF)

// or 

const boy = {
    name: "hasanali",
    age: 31
}

console.log(boy)

// accessing objects in two ways

console.log(boy.name)
console.log(boy["age"])

// objects

boy.gender = "male"

console.log(Object.keys(boy))
console.log(Object.values(boy))

console.log( delete boy.age)

console.log(Object.entries(boy))

// callback practice

const person123 = [{
    name: "hasan",
    age: 31
}]
const doSome = function(){
    console.log(person123)
}

doSome()

function doSomething(person, cb){
    setTimeout(function () {
        person123.push(person)
        cb()
    }, 5000)
}

doSomething({ gender: "male"}, doSome)

// promise

const userPromise = new Promise((resolve, reject) => {
    const isFetched = false

    const data = {
        name: "hasan promise"
    }
    if(isFetched){
        resolve(data)
    }else{
        reject("Error")
    }
})

userPromise.then((res) => {
    console.log(res)
}).catch(e => {
    console.log(e)
})