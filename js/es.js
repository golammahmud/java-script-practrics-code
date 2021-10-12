// "use strict"

// // default parameter
// function msg(text='this is a default parameter'){
//     console.log(`${text}`);
// }
// msg("parameter")


// // rest parameter
// function sum(x,y,...z){
    
//     console.log(`x=${x} y=${y} z=${z}`);
//     return x+y;
// }

// let add=sum(10,10,435,3,54,6)
// console.log(add)

// // spred operator
// function spd(x,y,z){
//     return x+y+z;
// }

// let num=[1,2,3,4,5,56,76]
// // console.log(spd(num[0],num[1],num[3],num[4]));

// console.log(spd(...num));

// // let num2=[...num,54,5]
// let num2=[54,5]
// let num3=num.concat(num2);
// console.log(num3)


// JavaScript For In
"use strict"
// const person = {fname:"John", lname:"Doe", age:25};
// let text='';
// for (let i in person){
//     text =text+person[i] +" ";
//     // console.log(`${text}  `);
//     // console.log(`${i}:${person[i]}`);
// }


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] +" ";
//   console.log(txt)
// }




//foreach loop
// const numbers = [45, 4, 9, 16, 25];
// const num = [];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//     array[index]=value+5;
//     console.log(numbers)
    // num.push(value*value)
    // console.log(num)
//   txt += value + " ";
//   console.log(`index=${index}:text=${txt} array:${array}`)
// }




// Looping over an Array
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
//   console.log(x)
// }


// Looping over a String

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// console.log(text)
// }


/* object literate*/ 
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     age:30,
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// let obj=person;
// let v= obj.fullName()
// console.log(`${v} age:${obj.age} eyecolor:${obj.id}`)






//array destructure

// let num=[10,25,55,584,2,55,6,978,97,785]
// const [num1,num2,num3,...n]=num;
// console.log();




//swap variable
// let a=10; let b=20;
// [a,b]=[b,a];
// console.log(a,b)



//object destructure

// const students={
//   name:'jhon',age:25,gpa:3.80,languages:{
//     nativ:'bangla',
//     learning:'english',
//   }
// }
// const {name,age,gpa,languages}=students

// console.log(name,gpa,age,languages.nativ);







//destructure function parameters
const studentinfo=({name,gpa})=> {
  console.log(`${name} ${gpa}`);
};

const students={
  name:'jhon',
  age:25,
  gpa:3.80
}

studentinfo(students)

