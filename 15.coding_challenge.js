const checkString = function(str, word){
    if(str.includes(word)){
        return true
    } else {
        return false
    }
}

let result = checkString("hello are you there", "there")
console.log(result)

