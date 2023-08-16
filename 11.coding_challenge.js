const checkStringContainWhiteSpace = function(str){
    if(str.length == str.trim().length){
        return true
    } else {
        return false
    }
}

let result = checkStringContainWhiteSpace("hello")
console.log(result)