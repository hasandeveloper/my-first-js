
const obj = {
    firstName: "Hasan",
    age: 29
}

function getUser({firstName, age}){
    console.log(firstName)
    console.log(age)
}

getUser(obj)