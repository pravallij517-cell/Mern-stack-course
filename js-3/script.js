console.log("Looping andf Functions page");
let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);

for (let i=1;i<=100;i++){
console.log(i);
}
let obj={
     name:"girl",
     age:20,
     branch:"csc"
 } 
 for (const i in obj){
     const element = obj[i];
     console.log(i);
     console.log(obj[i]);
 }
 for (const i of "hello") {
    console.log(i);
 }

 let i=1;
 while(i<=50){
    console.log("hi");
    i++;
 }


let t=1;
 do{
    console.log("prasanna");
    t++;
 }
 while(t<=50);
 
 let l=40;
 let k=50;
 let  max=(l>k) ? l:k;
 console.log("max num:"+max);

 let x="guava";
 switch(x){
    case"banana":
       console.log("This is a banana");
      break;
    case"apple":
       console.log("This is a apple");
      break;
     default:
        console.log("I dont need fruits");
 }

 function nice(name){
console.log("Hey "+name+" you are nice1");
console.log("Hey "+name+" you are nice2");
console.log("Hey "+name+" you are nice3");
console.log("Hey "+name+" you are nice4");

 }
nice("sri devi");

// console.log("Hey chinnu,you are nice1");
// console.log("Hey chinnu,you are nice2");
// console.log("Hey chinnu,you are nice3");
// console.log("Hey chinnu,you are nice4");


function sum(a,b){
    // console.log(a+b);
    return a+b;
}
total=sum(10,20);
console.log(total);

function sum2(a,b,c=3){
    console.log(a+b+c);
}
sum2(1,2);

const func1 =()=>{
    console.log("I am an arrow function",);
}
func1("hello")