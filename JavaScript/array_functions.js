let arr=[1,2,3,4,5,"dim"];
let b= arr.toString();
let c=arr.join("-")
console.log(arr);
console.log(b,typeof b);
console.log(c);
let p=arr.pop();//pop returns the last element //ALL THE FUNCTIONS BELOW CHANGES THE ORIGINAL ARRAY
console.log(arr,p);
let d=arr.push(25);//push returns the length of the array after adding and element in the last 
console.log(arr,d);
let r=arr.shift();//shift returns the first element of the array
console.log(arr,r);
let y=arr.unshift(10);//unshift returns the length of the array after adding a number in start
console.log(arr,y);