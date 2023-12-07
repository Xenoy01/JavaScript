// Primitive datatypes
let a = null;
let b= 365;
let c= true;
let d= BigInt("576")+BigInt("4");
let e="Adarsh";
let f=Symbol("i am a good guy") ;
let g= undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof d);
// Non primitive datatypr ie: Objects
const item={
    "Harry":true,
    "Subh":false,
    "Adarsh":68,
    "Nimbu":undefined
}
console.log(item["Harry"]);