// var count=0;
// document.querySelector("textarea").addEventListener('keypress', function(event) {
//       count++
//       var text=event.key;
//       if (text=="a"){
//          alert("you have pressed a")
//       }
//       document.querySelector("p").innerHTML="presses "+ text +count;
// } )


document.querySelector("#checkbtn").addEventListener("click",function(){
   var text=document.querySelector("#t").value;
 try{
   if (text <5 || text>10){
      throw("input is out of range");
     }
 }
 catch(error){
   console.log(error);
 }
})