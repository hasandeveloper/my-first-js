// print elements
const arr = [1,2,3,4,5,5,6,6]

// arr.forEach((ele)=>{
//     console.log(ele)
// })


// // print string numbers

// arr.forEach((ele) => {
//     console.log(ele.toString())
// })

// // print arr in reverse order
// let reverse = []
// arr.forEach((ele) => {
//     reverse.unshift(ele)
// })
// console.log(reverse)

// let result = revOrder(arr)
// console.log(result)

// // print sum of arr

// const sumArr = arr.reduce((acc, val) =>{
//     return acc + val
// }, 0)

// console.log(sumArr)

// // print average number

// const averageNumber = (arr) => {
//     let sum = arr.reduce((acc, val) => {
//         return acc + 1
//     }, 0)

//     let avg = sum/arr.length
//     return avg.toFixed(2)
// }

// let result1 = averageNumber(arr)
// console.log(result1)

// // print uniq element
// const uniqueEle = function(arr){
//     var formedArray = []
//     for(i=0;i<arr.length;i++){
//         if(!formedArray.includes(arr[i])){
//             formedArray.push(arr[i])
//         }
//     }

//     return formedArray
// }

// let result2 = uniqueEle(arr)
// console.log(result2)


// function characterSeperator(str, char){
//     return str.split(char).join("")
// }

// let result = characterSeperator("hello","e")
// console.log(result)

// function reverseString(str){
//     let reverse = []
//     str.split("").forEach((ele) => {
//         return reverse.unshift(ele)
//     })
// return reverse.join("")
// }
// let result1 = reverseString("hasan")
// console.log(result1)

function repeatWord(str){
    let repeatNum = str.split("").length
    console.log(str.repeat(repeatNum))
}
repeatWord("hello")