const arr = [1,2,3,4,5,5,6,6]

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}


for(i=0;i<arr.length;i++){
    console.log(`This is a string number: ${arr[i]}`)
}

const revOrder = function(arr){
    return arr.reverse()
}

let result = revOrder(arr)
console.log(result)

const sumArr = arr.reduce(function(acc, currVal){
    return acc + currVal
}, 0)

console.log(sumArr)

const averageNumber = function(arr){
    const sum = arr.reduce(function(acc,curVal){
        return acc + curVal
    }, 0)
    let avg = sum/arr.length
    return `$${avg.toFixed(2)}`
}

let result1 = averageNumber(arr)
console.log(result1)


const uniqueEle = function(arr){
    var formedArray = []
    for(i=0;i<arr.length;i++){
        if(!formedArray.includes(arr[i])){
            formedArray.push(arr[i])
        }
    }

    return formedArray
}

let result2 = uniqueEle(arr)
console.log(result2)