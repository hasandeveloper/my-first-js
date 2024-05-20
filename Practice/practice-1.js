var personName = "Hasan";
let age = 28;
const personColor = "black";

//String
let fullName = "Hasan";

//Number
let accountBalance = 100;

// Boolean
let isMarried = false;

// Null
let pendingTransaction = null;

// undefined
let country = undefined

// symbol
let uniqId = Symbol("id");

//Arrays
let transactionsAmount = [1,2,3,4];


//For loop 
for(let i = 0; i < 10; i++){
    console.log(i)
}

let i = 0;
while(i < 10){
    console.log(i, "hello im while loop")
    i++
}


const numberOfWords = (str) => {
    return str.length
}
let result = numberOfWords("Hello")
console.log(result)


const longerString = (str) => {
    if(str.length > 100){
        return true
    }else{
            return false
    }
}
let result1 = longerString("helloooooooo",100)
console.log(result1)

//trim
const result2 = "   hello ";
console.log(result2.trim())

//toUppereCase and toLowerCase
console.log(result2.trim().toUpperCase())
console.log(result2.trim().toLowerCase())

let checkStringContainWhiteSpace = (str) => {
    if(str.trim().length === str.length){
        return "No"
    }else{
        return "Yes"
    }
}
let result3 = checkStringContainWhiteSpace("hello  ")
console.log(result3)


//seperate character

let characterSeperator = (source, character_to_seperate) => {
    return source.split(character_to_seperate).join("")
}
let result5 = characterSeperator("hello","e")
console.log(result5)


//reverse

let reverseString = (str) => {
    return str.split("").reverse().join("")
}
let result4 = reverseString("hasan")
console.log(result4)

// repeat

let repeatWord = (str) => {
    let ar = str.split("")
    let dupArray = []
    for(let i = 0 ; i < ar.length ; i++){
        if(dupArray.includes(ar[i])){
            console.log("Yes , is ther")
            return
        }else{
            dupArray.push(ar[i])
        }
    }
    console.log("No, not ther")
}
repeatWord("helo")

// startsWith()

const result6 = "Welcome"
console.log(result6.startsWith("w"))


// starts with challenge


const result7 = "hello"
console.log(result7.startsWith("H"))


let lastCharExists = (source, word) => {
    if(source.charAt(source.length - 1) == word){
        return "true da"
    }else{
        return "false da"
    }
}
let result8 = lastCharExists("hellow","0")
console.log(result8)



console.log("slice start --------------------- ")

const str = "welcome to the world js";

const res = str.slice(0,8)

console.log(res)



const isPalindrome = (str) => {
    if(str.trim().split("").reverse().join("") == str){
        return true
    }else {
        return false
    }
}

let result9 = isPalindrome("aba")
console.log(result9, "im palin")

const book = ["mongodb","express","react","nodejs"]

console.log(book.indexOf("express"))

console.log(book.lastIndexOf("nodejs"))

console.log(book.includes("mongodb"))


const productQty = [10,20,30,40]

const ans = productQty.reduce((acc, currVal) => {
    return acc + currVal
}, 0)

console.log(ans)

const arr = [1,2,3,4,5,5,6,6]
const averageNumber = (arr) => {
    const sum = arr.reduce((acc, currVal) => {
        return acc + currVal
    }, 0)

    const ans = sum/arr.length
    return ans
}


let result10 = averageNumber(arr)
console.log(result10)

