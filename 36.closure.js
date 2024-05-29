var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

 var createCounter = function(n) {
    var counter = n - 1
    return function() {
        return counter += 1
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */





/**
 * @param {string} val
 * @return {Object}
 */
 var expect = function(val) {
    return {
        toBe: function(val1){
            if(val === val1){
                return true
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(val1){
            if(val !== val1){
                return true
            }else{
                throw new Error("Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

 var createCounter = function(init) {
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */