function sayHello() {
    console.log("Hello, World!");
}
  
setTimeout(sayHello, 2000); // Executes `sayHello` after 2 seconds


function sayBye(){
    console.log("bye")
}

setInterval(sayBye, 5000)
  

// setTimeout executes the function once after the delay.
// setInterval executes the function repeatedly at the specified interval.