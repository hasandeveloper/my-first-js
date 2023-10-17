














//-----
//High Order Function (HOF)
//-----

//Calc Bill
const calcBill = function (qyt, price) {
    return qyt * price;
  };
  
  //Display Bill
  const displayBill = function (calcBillFn) {
    console.log(calcBillFn);
  };
  
  // displayBill(calcBill(2, 5));



  
  //-------
  //Function returning another function (HOF)
  //-------
  
  // function addTwoNums() {
  //   return function () {
  //     console.log("Am called");
  //   };
  // }
  
  // // const firstFn = addTwoNums();
  
  // // const secondFn = firstFn();
  // // console.log(secondFn);
  
  // addTwoNums()();
  
  function addTwoNums(a) {
    return function (b) {
      return a + b;
    };
  }
  
  const addTwoNums2 = a => {
    return b => a + b;
  };
  
  addTwoNums2(3)(4);
  
  // const firstFn = addTwoNums(2);
  // const result = firstFn(3);
  
  // console.log(result);
  
  // const result = addTwoNums(2)(3);
  // console.log(result);














  
  //---------
  //IIFE - Immediately Invoked Function Expression
  //-------
  
  function logHello() {
    console.log("Hello normal function");
  }
  
  // logHello();
  
  //using IIFE
  // (function sayhello() {
  //   logHello();
  // })();
  
  (() => console.log("Another IIFE"))();
  