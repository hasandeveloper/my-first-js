//seperate character
const characterSeperator = function(str, char){
    return str.split(char).join("")
}

let result = characterSeperator("hello","e")
console.log(result)

//reverse

const reverseString = function(str){
    return str.split("").reverse().join("")
}


let result1 = reverseString("hasan")
console.log(result1)


// repeat

const repeatWord = function(str){
    let numberStr = str.split("").length
    console.log(str.repeat(numberStr))
}

repeatWord("hello")

// startsWith()

const result2 = "Welcome"
console.log(result2.startsWith("w"))

// starts with challenge

const startWith = function(str, char){
    if(str.startsWith(char)){
        return true
    } else {
        return false
    }
}

const result3 = startWith("hello","H")
console.log(result3)

const lastCharExists = function(str,char){
    if(str.charAt(str.length - 1) == char){
        return true
    } else {
        return false
    }
}

let result4 = lastCharExists("hellow","0")
console.log(result4)

