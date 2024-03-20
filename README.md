# 10 Days of JS

## 001 Day 0: Hello, World!
```js
// Este código é uma função chamada `greeting` que aceita um parâmetro de entrada chamado `parameterVariable`.
function greeting(parameterVariable) {
    // Essa linha imprime 'Hello, World' no console:
    console.log('Hello, World!');
    // Essa linha usa 'console.log()' para imprimir o valor do parâmetro. Isso mostrará o valor armazenado na função quando ela for chamada.
    console.log(parameterVariable);
    // Aqui está um exemplo de como você poderia chamar a função `greeting` e o que seria impresso no console:
    javascript
    greeting('Hello, World!');
}
```
## 002 Day 0: Data Types
```js
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare uma variável chamada 'firstInteger' e inicialize com o valor 4.
    const firstInteger = 4;
    
    // Declare uma variável chamada 'firstDecimal' e inicialize com o valor de ponto flutuante 4.0.
    const firstDecimal = 4.0;
    
    // Declare uma variável 'firstString' e inicialize com a string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Escreva o código que usa console.log para imprimir a soma de 'firstInteger' e 'secondInteger' (Usa parseInt para converter para o tipo Number(inteiro)) em uma nova linha.
    console.log(firstInteger+ parseInt(secondInteger, 10));
    

    // O código usa console.log para imprimir a soma de 'firstDecimal' e 'secondDecimal' (Usa parseFloat para converter para o tipo Number(flutuante)) em uma nova linha.
    console.log(firstDecimal+ parseFloat(secondDecimal));
    

    // O código usa console.log para imprimir a concatenação de 'firstString' e 'secondString' em uma nova linha. A variável 'firstString' deve ser impressa primeiro.
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
* Calcular o perímetro de um retângulo.
*
*   length: O comprimento do retângulo.
*   width: A largura do retângulo.
*
*   Return a number denoting the perimeter of rectangle.
    Retorna um número que representa o perímetro do retângulo.
**/
function getPerimeter(length, width){
    let perimeter;
    perimeter = 2*(length+width);

    return perimeter;
}

```
## 004 Day 1: Functions
```js
// A função factorial recebe um parâmetro 'n', que representa o número para o qual se deseja calcular o fatorial.
function factorial(n){
    // Verifica se (n) é igual a 1. Se for, ele retorna 1, pois o fatorial de 1 é 1. Essa é a condição de parada da recursão.
    if(n==1){
        return 1;
    }
    // Senão, a função chama a si mesma, passando como argumento n-1 (ou seja, um número menor do que n).
    else{
        // Multiplica n pelo resultado da chamada recursiva, que é o fatorial de n-1. Esse passo é repetido até que n seja igual a 1.
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
```
## 016 Day 5: Template Literals
```js
function sides(literals, ...expressions){
    // ES6 allows destructuring of arrays into multiple variables
    const [a, p] = expressions;
    // Perform this operation only once and assign to variable
    const root = Math.sqrt((p*p)-(16*a))
    const s1 = (p + root)/4;
    const s2 = (p - root)/4;
    // s2 will always be smaller because of the (-/+) above
    return ([s2, s1]);
}
```
## 017 Day 05: Arrow Functions
```js
function modifyArray(nums){
    const modifiednums = nums.map(function(s){
        if(s%2==0){
            return s*2;
        } else {
            return s*3;
        }
    });
    return modified;
}