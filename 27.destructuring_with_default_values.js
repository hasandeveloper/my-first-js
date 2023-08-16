//Object destructuring

const obj = {
    firstName: undefined,
    age: 29
}

const { firstName = "lamjarred", age: myAge, gender = "male" } = obj //firstName returns "lamjarred"