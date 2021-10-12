var btnlen=document.querySelectorAll(".btn1").length;
let h1=document.querySelector("h1");
for (var i=0;i<btnlen;i++){
    let e=document.querySelectorAll(".btn1")[i];
    e.addEventListener("click", addAudio);
function addAudio(){
        var text=this.innerHTML;
        // h1.innerHTML=text + "  is clicked";
        // audioplay(text);
        var animButton=document.querySelector("."+ text);
        animButton.classList.add("anim");
        console.log(animButton);
       
        

}

function audioplay(text){
    switch (text){
        case "button 1":
            var audio=new Audio("audio/1.mp3");
            audio.play();
            break;
        case "button 2":
            var audio=new Audio("audio/2.mp3");
            audio.play();
            break;
        case "button 3":
            var audio=new Audio("audio/3.mp3");
            audio.play();
            break;
    }
    
}

}
// function addEvent(){
//     let text=this.innerHTML;
//     h1.innerHTML=text + "  is clicked";
// }



// function addAnim(text){
//     let animButton=document.querySelector("." + text);
//     animButton.classList.add("anim");
   
// }
// e.addEventListener("click", function(){
//     let header1=document.querySelector("h1");
//     header1.classList.add("event-class");

// });





// h1.addEventListener("mouseover", addEvent);

// function addEvent(){
    
//     h1.classList.add("event-class");;
// }

// h1.addEventListener("mouseout", removeEvent);

// function removeEvent(){
    
//     h1.classList.remove("event-class");
// }




