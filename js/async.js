// JavaScript Callbacks

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond();
//   myFirst();

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);



// Asynchronous JavaScript

const taskone=(x)=>{
    console.log("task 1");
    x();
}
// const data=()=>{
//     console.log("task 2..data loading...")
// }
const tasktwo=(x)=>{
    setTimeout(()=>{console.log("task 2..data loading...");
    x();
},2000);
}
const taskthree=(c)=>{
    console.log("task 3");
    c();
}
const taskfour=(x)=>{
    console.log("task 4");
    x();
}
const taskfive=()=>{
    console.log("task 5");
  
   
}
taskone(()=>{
    tasktwo(()=>{
        taskthree(()=>{
            taskfour(()=>{
                taskfive()
            })
        });
    });
})
// tasktwo()
// taskthree()
// taskfour()
// taskfive()