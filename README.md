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
```
## 009 Day 3: Arrays
```js
function getSecondLargest(nums) {
    // Complete
    let first = nums[0];
    let second = -1;
    for(let i=0; i<nums.length;i++>){
        if(nums[i]>first){
            second = first;
            first = nums[i];
        }
        if(nums[i] > second && nums[i] < first){
            second = nums[i];
        }
    }
    return second;
}
```
## 010 Day3: Try Catch, and Finally
```js
function reverseString(s){
    try{
        console.log(s.split('').reverse().join(''));
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}
```
## 011 Day 3: Throw
```js
function isPositive(a){
    if(a>0){
        return 'YES';
    }
    else if(a==0){
        throw new Error('Zero Error');
    }
    else if(a<0){
        throw new Error('Negative Error');
    }
}
```
## 012 Day 4: Create a Rectangle Object
```js
function Rectangle(a, b){
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b);
    this.area = a*b;
}
```
## 013 Day 4: Count Objects
```js
function getCount(objects){
    var count = 0;
    for(let o of objects){
        if(o.x == o.y){
            count += 1;
        }
    }
    return count;
}
```
## 014 Day 4: Classes
```js
class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        var sum = 0;
        for(let i=0;i<this.sides.length; i++){
            sum += this.sides[i];
        }
    }
}
```
## 015 Day: 5: Inheritance
```js
/*
* Write code tha adds an 'area' method to the Rectangle class' prototype
*/

Rectangle.prototype.area = function(){
    return this.w * this.h;
}

/*
 * Create a Square thats inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle{
    constructor(s){
    super(s);
    this.h=s;
    this.w=s;
    }
}