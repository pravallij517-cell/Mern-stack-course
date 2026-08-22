// let n=[1,2,3,4]
// for(let i=0;i<=n.length;i++){
//     console.log(n.length);
// }

// let arr=[1,2,3,4];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]*arr[i]);
// }

// let arr=[5,4,1,3,2,5,7,9,6,3];
// for(let i=1;i<arr.length;i+=2){
//     console.log(arr[i]*arr[i]);
// }

// let arr2=[1,2,3,4,5];
// for (let i=arr2.length-1;i>=0;i--){
//     console.log(arr2[i]+1);
// }

// let arr2=[1,2,3,4,5];
// for (let i=arr2.length-1;i>=0;i--){
//     console.log(arr2[i]);
// }

// let a="*";
// for ( i=1;i<=5;i++){
//     console.log("*".repeat(i));
// }


// var myarray=[1,2,"b","a",5]
// myarray.forEach(function(element){
// console.log(element);
// });


// var myarray=[6,7,8,9];
// for(var element of myarray){
//     console.log(element);
// }


// var myArray=[1,2,3,4,5];
// var multipliedArray=myArray.map(function(element){
//     return element*2;
// });
// console.log(multipliedArray);



// arr=[1,2,3,4,5]
// let arr2=arr.map(function(i){
//     console.log(arr2,arr1);
//     return i**2;
// });


//  arr3=[1,2,3,4,5];
// let aar3=arr3.filter(function(i){
//     return i%2===0;
//     console.log(arr3);
// });


// let arr=[1,2,3,4,5];
// let sum=arr.reduce(function(a,b){
//     return a+b;
// },1);
// console.log(sum)


// let sum2=(a,b)=>{
//     return a+b;
// }
// console.log(arr.reduce(sum2,1));

function factor(n){
    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
arr5=[5,7,2,8,4,5]
n=arr5.length
for(let i=0;i<=n;i++){
    console.log(factor(arr5[i]))
}

// let n=5
// for(let i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);