//!if 
// If statement
let age = 1;
if (age < 2){
    console.log("Im here")
}

//if else statement

let isMale = true;
if (isMale){
    console.log("Yes male")
}else {
    console.log("Not male")
}

// if else if statement
let trafficLight = "yellow"
if (trafficLight === "red"){
    console.log("Stop")
} else if(trafficLight === "yellow"){
    console.log("Prepare to stop")
}else{
    console.log("Go")
}

//! switch

let dayNumber = 9;

switch(dayNumber){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    default:
        console.log("Invalid number a day")
}

