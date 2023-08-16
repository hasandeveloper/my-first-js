const numberOfWords = function(string){
    return string.length
}

let result = numberOfWords("Hello")
console.log(result)

const longerString = function(string, max_length){
    if(string.length > max_length){
        return true
    }else{
        return false
    }
} 

let result1 = longerString("helloooooooo",100)
console.log(result1)
