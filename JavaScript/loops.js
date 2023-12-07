let a=2;
for (let i = 0; i <=20; i++) {
    console.log(a,"*",i,"=",a*i);
    
}
console.log(typeof(a));
// console.log(a,"hello");
let b=25;
console.log(typeof(b));
// for in loop 
let obj={
    harry:25,
    adarsh:99,
    sambit:95,
    sana:5
}
for (const key in obj) {
        console.log(key,"=",obj[key]);
    }
// for of lops cannot work in objects
for (const r of "object") {
    console.log(r);
}
