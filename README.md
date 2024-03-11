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
```
## 005 Day 1: Let and Const
```js
function main(){
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = +(readLine());

    // Print the area of the circle:
    console.log(PI*r*r);

    // Print the perimeter of the circle:
    console.log(2*PI*r);
}
```
## 006 Day 2: Conditional Statements: If-Else
```js
function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=25){
        grade = 'A';
    }
    else if(score>20 && score<=25>){
        grade = 'B';
    }

    else if(score>10 && score<=20>){
        grade = 'C';
    }

    else if(score>10 && score<=15>){
        grade = 'E';
    }

    return grade;
}
```
## 007 Day 2: Conditional Statements: Switch
```js
function getLetter(s){
    let letter;
    var firstletter = s[0];
    switch(true){
        case "aeiou".includes(firstletter):
            letter = 'A';
            break
        case "bcdfg".includes(firstletter):
            letter = 'B';
            break;
        case "hjklm".includes(firstletter):
            letter = 'C';
            break;
        case "npqrstvwxyz".includes(firstletter):
            letter = 'D';
            break;    
    }
    return letter;
}
```
## 008 Day 2: Loops
```js
function vowelsAndConsonants(s){
    let vowels = 'aeiou';
    var consonants = '';
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            console.log(s[i])
        }
        else{
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}