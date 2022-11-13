console.log("Welcome to Node JS");


//Basic Variables. 

var intA = 10;
var intB = 20;

var intC = intA + intB;

console.log ("The sum is " + intC);


// Control Structures
// IF Statement

if (intA > intB ){

    console.log("A is greater than B ");

}
else{

    console.log("A is Less than B");

}

// For Loop

for (var i = 0; i < 10 ; i ++){

    console.log ("The Value of i is " + i );

}

// == and === dif 

//== 

var strA = '20';


//== Value is read     --> Matches value only    
// === value is not read -- Matches both type and value. 

if (strA === 20){

    console.log("Value read");

}
else{

    console.log("value not read");

}

// Arrays 

const intArrTest = [44, 31, 45, 34, 56, 45, 67, 13];
console.log(intArrTest);


console.log(intArrTest[0]);
console.log(intArrTest[1]);
console.log(intArrTest[2]);
console.log(intArrTest[3]);
console.log(intArrTest[4]);
console.log(intArrTest[5]);


// Make other file input this this file both variables and functions.. 

// Import That appfile..

const app = require ("./app.js");

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());



// FItering the Array...!!! using filter function.. 

const intArrFilterTest = [2, 3, 6, 4, 7, 1, 9];

console.log("The list of array elements filtered is given by");

let intArrResult = intArrFilterTest.filter((intItem) => {

    //console.log(intItem);

    return(intItem >= 2 );


});

console.log(intArrResult);






