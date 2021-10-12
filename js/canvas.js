
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

// ctx.lineWidth=3;
// ctx.strokeStyle="black";
// ctx.strokeRect(10,10,310,330);

// ctx.fillStyle="green";
// ctx.fillRect(12,12,305,325);

// var centerx=canvas.width/2;
// var centery=canvas.height/2;

// ctx.beginPath();
// ctx.arc(centerx,centery,50,0, 2 * Math.PI,false);

// ctx.fillStyle="red";
// ctx.fill();
// ctx.stroke();




// const addition=(a,b)=>{
//     let sum=a+b;
//     // console.log(sum);
//     return (sum);
// }
// let add=addition(20,10);
// console.log(add);

// const p = ()=>{
   
//     console.log("hello");
    
// }
// p();

ctx.font = "30px Arial";
ctx.fillText("Hello World", 140, 150);
ctx.strokeText("Hello World", 10, 50);