const book = ["mongodb","express","react","nodejs"]

//indexOf 
console.log(book.indexOf("nodejs")); //3

//lastIndexOf
console.log(book.lastIndexOf("react")) //2

//include
console.log(book.includes("mongo")) //true

//reverse
console.log(book.reverse())

//reduce
const productQty = [10,20,30]

//here below acc mean accumalator it has zero value at the time of initial loop of reduce function.
//for second loop of reduce function the acc will become 10 for currVal of 20.
//for third loop of reduce function the acc will become 30 for currVal of 30 and so on
//it kind of inject method in ruby 
//the function which we are calling under reduce is callback function
const ans = productQty.reduce(function(acc,currVal){
    return acc + currVal
}, 0)

console.log(ans)

//find
//basically in find function once condition is true it will return that single element 
const agesArr = [20,30,40,50]
const ageFind = agesArr.find(function(ele){
    return ele < 40
})
console.log(ageFind) // 20


//filter
const ageFilter = agesArr.filter(function(ele){
    return ele < 40
})
console.log(ageFilter) // 20,30

