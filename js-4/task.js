// function mean(a,b,c,d,e){
//     console.log((a+b+c+d+e)/5)
// }
// mean(1,2,3,4,5);


// const func1=(a,b,c,d,e)=>{
//     console.log((6,7,8,9,5)/5);
// }
//  func1 (6,7,8,9,5)

//  const square=(x)=>{
//     return x*x;
//  }
//   let x=square(6);
//   console.log(x);

//   const square2 = x =>x*x;



//   function outer(){
//         console.log("Outer function running....");
//   function inner(){
//         console.log("Inner function running....");
//     }
//     inner();
//   }
//   outer();
  

let str="java script";
console.log(str.length)

let str1="Hello";
let str2="Java";
console.log(str1.concat(str2));
console.log(str1+str2);

let text="Prasanna";
console.log(text.indexOf("s"));

let str3="carry on";
console.log(str3.slice(6));

let sentance="Hello pravalika";
console.log(sentance.replace("pravalika","prasanna"));

let fruits="Apple,Apple,Apple";
console.log(fruits.replace(/Apple/g,"orange"));

let greetings="Good morning";
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());

let name=" prasanna ";
console.log(name.trim());

let Flowers="Rose,Lotus,Sunflower";
console.log(Flowers.split(","));

let str4="This isn't good";
console.log(str4 .slice(0,16));

let str5=`Hello world!`;
console.log(str5);

let nme="Abhinav";
let greet="Hello,"+nme+"! Welcome to class";
console.log(greet);


let f=10;
let g=5;
let h=f+g;
console.log(`This sum is ${f} and ${g} is ${h}`);


let a=10;
let b=5;
// let c=a+b;
console.log(`This sum is ${a+b} `);



let messages ="This is line 1.\n"+ 
"This is line 2.\n"+ 
"This is line 3.";
console.log(messages);


let message =`This is line 1. 
This is line 2. 
This is line 3.`;
console.log(message);


let nd="pravalika";
let age="22";

let html=`
<div>
<h2>${nd}</h2>
<p>Age: ${age}</p>
</div>
`;
console.log(html);

 var myArray=[1, "Hello",[2,3]];
 myArray.splice(1,1,"Hello World",[4,5]);
 console.log(myArray);

