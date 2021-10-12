// JavaScript Promises

console.log("welcome to promises");
// function myDisplayer(some) {
//     document.getElementById("para").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   document.getElementById("para").innerHTML = value;
// }

// const promises1=new Promise((resolve,reject)=>{
//     let completedpromise=true;
//     if (completedpromise){
//         resolve('promises done')
//     }else{
//         reject(new Error("not complete promises 1"));
//     }
// });


// const promises2=new Promise((resolve,reject)=>{
//     resolve("resolved promises 2")
// })
// console.log(promises1)

// // promises1.then(res=>console.log(res))
// // .catch(err=>console.log(err))

// // promises2.then(res=>console.log(res))

// console.log('res')
// // promises1.then(res=>document.getElementById("para").innerHTML = res)
// // .catch(err=>document.getElementById("para").innerHTML = err);

// // promises2.then(res=>document.getElementById("para").innerHTML = res)
// Promise.all([promises1,promises2])
// .then(([res1,res2]) =>console.log(res1,res2))

// console.log("end");







//res function
/*
const promises1=new Promise((resolve,reject)=>{
 setTimeout(()=>{
    const x=0;
    if (x==0){
        resolve("promises1 was resolved")
    }else{
        reject(new Error("promises 1 are reject"))
    }
 },2000)
});

const promises2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const x=0;
       if (x==0){
           resolve("promises2 was resolved")
       }else{
           reject(new Error("promises 2 are reject"))
       }
    },1000)
   });
   


const promises3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("promises3 was resolved")
    },3000)
   });
 


Promise.race([promises1,promises2,promises3])
.then(res=>console.log(res))

  */

//    async and await make promises easier to write


console.log("start task by promises")

/**
 * 
 * @returns 
 */

const taskone=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task one is done")
        // reject("task five is not done")
    })
}
const tasktwo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task two is done")
        },2000)
        
    })
}
const taskthree=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task three is done")
    })
}
const taskfour=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task four is done")
    })
}
const taskfive=()=>{
    return new Promise((resolve,reject)=>{
        reject("task five is not done")
    })
}

// taskone().then(res=>console.log(res))
// .then(tasktwo)
// .then(res=>console.log(res))
// .then(taskthree)
// .then(res=>console.log(res))
// .then(taskfoue)
// .then(res=>console.log(res))
// .then(taskfive)
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

const displaytask=async()=>{
    try{
        const t1=await taskone();
        console.log(t1)
        const t2=await tasktwo();
        console.log(t2)
        const t3=await taskthree();
        console.log(t3)
        const t4=await taskfour();
        console.log(t4)

        const t5=await taskfive();
        console.log(t5)
    }catch(err){
        console.log(err)
    }
}
displaytask()
console.log("end all task")
