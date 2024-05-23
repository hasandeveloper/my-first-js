// Create objects
const person = {}

person.name = "Hasan";
person.age = 29;
person.isMarried = true;
console.log(person)

// or
const boy = {
    firstName: "hasan",
    lastName: "ali",
    age: 29,
    isMarried: true,
    hobbies: ["coding","shopping"]
}

console.log(boy)



//Accessing objects can be in two ways below

console.log(boy.name)
console.log(boy['age'])


//Updating the object

boy.name = "Hasan ali cn"
console.log(boy)

//Delete the object
delete boy.hobbies

console.log(boy)


//Adding method/function to obejct Important

boy.fullName = function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(boy.fullName())


const person1 = {
    fname: "hasan",
    lname: "ali",
    status: false,
    isAdmin: true,
    fullName: function(){
        return `${this.fname} ${this.lname}`
    },
    checkStatus: function(){
        if(this.status === false){
            delete this.isAdmin
        }
    }
}

console.log(person1.fullName())

