// const cars = ["Saab", "Volvo", "BMW"];

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// const cars = new Array("Saab", "Volvo", "BMW");
// let x = cars[0];  
// let x=cars.length
// cars.push("Lemon"); 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// fruits.unshift("Lemon" ,"Volvo",);
// delete fruits[1];   

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// let cat=cars.join(fruits)

// console.log(cat);

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b){return a - b});
// points.sort(function(a, b){return b-a});
// points[1]=55
// console.log(points);

const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return 0.5 - Math.random()});

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
//   }
  function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
let x=myArrayMin(points)
console.log(x);