// begins the variable with 3 dots i.e ... is called rest operator
function addTwoNumber(a,b, ...rest){
    console.log(a+b);
    console.log(rest);
};

addTwoNumber(33,44,77,88,99,100)

