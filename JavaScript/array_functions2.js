let num=[1,2,3,4,5,6,7,8,9];
// let num1=[11,12,13,14,15]
// let num3=[15,888,777,66,33]
// delete num[0];
// let num2=num.concat(num1,num3);
// console.log(num, num.length);
// console.log(num2);
// let compare=(a,b)=>{
//     return a-b
// }
// num2.sort(compare);
// console.log(num2);
// num2.reverse();
// console.log(num2);
// splice and slice 
let a=num.splice(2,4,25,23,26);//returns an array of deleted elements and chianges the original array
console.log(num,a);
let b=num.slice(2,4);//returns a new array
console.log(b);