/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - if called in global scope, it will reference the global object, which is the browser window or console...
* 2. Implicit Binding is when 'this' is used in scope of an object and so it references that object
* 3. New Binding is when 'this' is used to refer to an object that is being created by a object-creator function
* 4. Explicit Binding is when 'this' in a method that assigns the object this is refering too directly, such as 'call' or 'bind'
*
* write out a code example of each explanation above
*/

console.log('test');
console.log('test2');


// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let car = {
    make: 'Honda',
    noise: 'vroom',
    drive: function(){
        return `The ${this.make} goes ${this.noise}!`;
    }
}

console.log(car.drive());

// Principle 3

// code example for New Binding
let Car = function(attrs){
    this.make = attrs.make;
    this.noise = attrs.noise;
    this.drive = function(){
        return `The ${this.make} goes ${this.noise}!`;
    }
}

let myCar = new Car({
    make: 'Tesla',
    noise: '...'
});

console.log(myCar.drive());


// Principle 4

// code example for Explicit Binding

function getNoise(){
    return `This item makes the noise: "${this.noise}"`;
}

console.log(getNoise.call(car));
