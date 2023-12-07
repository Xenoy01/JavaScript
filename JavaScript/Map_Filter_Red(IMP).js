//MAP FILTER AND REDUCE DONT CHANGE THE ORIGINAL ARRAY AND THEY REQUEIRED A FUNCTION TO BE MADE
let arr=[45,23,21];
arr.forEach((elements,index,array)=> {//does not return a new array
    console.log(elements,index,array);
});
//For_Each is used to do operations on the existing array Whereas map is used to make a new array
//map filter and reduce needs a function to be made 
let a =arr.map((value,index,array)=>{ //map makes a new array whereas for each doesent
    console.log(value,index, array);
    return value+index;
})
console.log(arr);
console.log(a);
let arr2=[45,23,21,0,3,5];
let a2=arr2.filter((value)=>{//Returns a new array (USE TO CHECK CONDITIONS)
    return value<10
}
)
console.log(a2);
//REDUCE 
let arr3=[1,2,3,5,2,1];
let redu=(h1,h2)=>{
    return h1+h2
}
let t=arr3.reduce(redu)//it returns a single value not an array
console.log(t);