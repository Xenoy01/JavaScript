let num=[3,5,1,2,4];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
// }
// for each loop
num.forEach(element => {
    console.log(element*element);
});
//Array.from is used to make array from html collections
//Array.from
let name="Harry";
let arr=Array.from(name);
console.log(arr);
//For Of(Cannot work with objects)
for (const i of num) {
    console.log(i);
}
//for in (gives a string the position of the itm in array)(use for objects to get the keys)
for (const key in num) { //Only gives the key
    console.log(key);
}
// for each (returns the element)
num.forEach(element => {
    console.log(element);
});