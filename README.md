# 10 Days of JS

## 001 Day 0: Hello, World!
```js
function greeting(parameterVariable) {
    // This line prints 'Hello, World' to the console
    console.log('Hello, World');
    console.log(parameterVariable);    
};
```
## 002 Day 0: Data Types
```js
    function performOperation(secondInteger, secondDecimal, secondString) {
        // Declare a variable named 'firstInteger' and initialize with integer value 4.
        const firstInteger = 4;

        // Declare a variable named 'firstDecimal' and initiliaze with floating-point value 4.0
        const firstDecimal = 4.0;

        // Declare a variable name 'firstString' and initiliaze with the string "HackerRank".
        const firstString = 'HackerRank';

        // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number)
        console.log(firstInteger + parseInt(secondInteger, 10));
    }
