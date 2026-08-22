let button=document.getElementById("btn")
btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>I have created successfully</b>"
})
button.addEventListener("contentmenu",()=>{
    alert("Dont hack us by right click please")
})
document.addEventListener("keydown",e=>{
    console.log(e,e.key,e.keyCode)
})