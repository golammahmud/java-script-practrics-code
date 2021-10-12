

var photos=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
console.log(photos.length)
var imgtag=document.querySelector("img");

var count=0;
function next(){
  count++
  if (count>=photos.length){
      count=0;
      imgtag.src=photos[count];
  }
  else{
    imgtag.src=photos[count];
  }
}


function prev(){
    count--
    if (count<0){
        count=photos.length-1;
        imgtag.src=photos[count];
    }
    else{
      imgtag.src=photos[count];
    }
  }