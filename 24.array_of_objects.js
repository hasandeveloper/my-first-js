// forEach
const students = [
    {name: "john", age: 13, debt: true},
    {name: "doe", age: 14, debt: false},
    {name: "arnold", age: 15, debt: true},
    {name: "shwer", age: 16, debt: false}
]

students.forEach(user => {
    console.log(user.name)
    console.log(user.age)
})

//map will be used to store modified array of objects in one variable

studentsData = students.map(user => {
    return user.name
})

console.log(studentsData)


//filter retuns object based on condition

const debtStudents = students.filter(user => {
    return user.debt === true
})

console.log(debtStudents)


//reduce 
const products = [
    {name: "orage", price: 2},
    {name: "apple", price: 3},
    {name: "banana", price: 6}
]

const productsTotalPrice = products.reduce(function (total,product){
    return total + product.price
}, 0)

console.log(productsTotalPrice)

