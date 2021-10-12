// Arrow Function:
// hello = () => {
//     document.getElementById("demo").innerHTML += this;
//   }
  
  // The window object calls the function:
//   window.addEventListener("load", hello);
  
  // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);

// const msg=(a,b)=> a+b;

// console.log(msg(2,3))


const students=[
  {'id':100,'name':'jack','gpa':3.80,'age':20},
  {'id':101,'name':'bob','gpa':4.80,'age':22},
  {'id':102,'name':'oggy','gpa':2.80,'age':254},
  {'id':103,'name':'tom','gpa':4.10,'age':27},
]


// const students_gpa=()=> {
//   return students.filter(x=>{
//     return x.gpa>3.80;
//   }).map(x=> x.name)
// }

const students_gpa=()=> {
  return students.filter((x)=>{
    return  x.gpa>3.80 ;
  }).map((x,i)=>{
    return `${i}:${x.name}`;
  })
}
console.log(students_gpa());