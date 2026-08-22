let boxes=document.getElementsByClassName("box");
console.log(boxes);
 boxes[2].style.backgroundColor="yellow";
 document.getElementById("blue").style.backgroundColor="grey";
 document.querySelector(".box").style.backgroundColor="pink";
 console.log(document.querySelectorAll(".box"));
 document.querySelectorAll(".box")[1].style.backgroundColor="orange";
 document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
 })
 