// Function declaration
function sayHello(){
    console.log("Hai bro");
}

sayHello()

//Function expression
let firstName = function(){
    console.log("Hasan")
}

firstName()

//Function argument vs parameter

let addNumber = function(a,b){  //parameter accepts
    let add = a + b;
    return add
};

let result = addNumber(1,9);  // arguments pass
console.log(result);