"use strict"


// const f = ['Apples','orange','200gm'];

// Create a new Map
// const fruits = new Map();


//arrow function
// const fruits=f.map ((c)=>{
//     return c;
// });

//anonimous function
const num=[4,5,5,85,5,845,554,4]
// let num2=num.map(function(v,index){
//     // return `${index}:${v}`;
//     return `${index}:${v*v}`;
// })




// filter method

const num2=num.filter(function(x){
    return x>10;
})
console.log(num);
console.log(num2);