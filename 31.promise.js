const userPromise = new Promise((resolve, reject) => {
    //lets make this user data we are getting from ajax code
    let user = {
        name: "hasan",
        age: 28
    };
    
    let isFetched = true;

    if(isFetched){
        // this method resolve() -> promise method will return user data.. can think if ajax is success will get data
        resolve(user)
    }else{
        // this method reject() -> promise method will return error .. can think if ajax is has failed 
        reject("Error fetching user try again")
    }
});

// chaining method this below method is the way to call above promise
//.then() is use to get the value from resolve function 
//.catch() is use to get the value from reject function 
userPromise.then((valueFromResolve) => {
    console.log(valueFromResolve)
}).catch((error) => {
    console.log(error)
})