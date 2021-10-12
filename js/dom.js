
// document.getElementById("heading1").innerHTML="hi javascript";

// document.getElementById("para").innerHTML="javascript";

// document.getElementsByClassName("my")[0].innerHTML='my name is parvez';
// document.getElementsByTagName('h1')[0].innerHTML='this is h1 tag';



// document.querySelector('#heading1').innerHTML='hi javascript quueryselector';


// document.querySelector('.para').innerHTML='this is query';


// document.querySelector('h3').innerHTML='this is query';


// function Photos(){
//     let image=document.querySelector('#image');
//     // image.innerHTML='hi';
//     // document.write('this is image button')
//     image.src='js/mt.jpg';
// }



var heading3=document.createElement("h1");
var text=document.createTextNode("this is heading 3");
heading3.appendChild(text)

var myDiv=document.querySelector(".my-div");
myDiv.appendChild(heading3)


// var heading2=document.getElementsByTagName("h1")[0];
// myDiv.removeChild(heading2);

var heading0=document.createElement("h1");
var text0=document.createTextNode("this is heading 0");
heading0.appendChild(text0);

myDiv.insertBefore(heading0,heading3);