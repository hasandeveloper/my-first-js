// 1. for..in loop
// 2. object.keys
// 3. forEach
// 4. object.values
// 5. object.entries


// 1. for..in loop
const person1 = {
    firsName: "hasan",
    lastName: "ali",
    status: false,
    isAdmin: true,
    age: 29,
    hobbies: ["tea","code"],
    isMarried: true,
    viewCount: 40
}

// for(let key in person1){
//     console.log(key)
// }

// 2. object.keys

const myKeys = Object.keys(person1)
// console.log(myKeys)

// 3. forEach

myKeys.forEach(function(data){
    console.log(data)
})

// 4. object.values
const myValues = Object.values(person1)
console.log(myValues)

// 5. object.entries (this is actual iteration of object)
const myEntries = Object.entries(person1)
myEntries.forEach(function([k, v]){
    console.log(`${k} - ${v}`)
})


// 6. The hasOwnProperty method checks whether key present
console.log(boy.hasOwnProperty("firstName"))  // O/P:- true

// 6. The includes method checks whether value present
console.log(Object.values(boy).includes("hasan"))  // O/P:- true



