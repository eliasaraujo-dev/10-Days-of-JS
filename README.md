# 10 Days of JS

## 001 Day 0: Hello, World!
```js
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);
```
## 002 Day 0: Data Types
```js
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger+ parseInt(secondInteger, 10));
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal+ parseFloat(secondDecimal));
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+ secondString);
    
}
```
## 003 Day 1: Arithmetic Operators
```js
function getArea(length, width) {
    let area;
    area = length * width;
    // Write your code here
    
    return area;
}

/**
* Calculate the perimeter of a rectangle
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*   Return a number denoting the perimeter of rectangle.
**/
function getPerimeter(length, width){
    let perimeter;
    perimeter = 2*(length+width);

    return perimeter;
}
```
## 004 Day 1: Functions
```js
function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}