//Map uses a operaion (Returns a new array)
//Filter use s a condition (Returns a new array)
//reduce use an operation (Returns a single vaue)
let arr=[1,2,30,4,50,6,7,83,670];
let fun=(val)=>{//always remember filter uses a condition in return 
    return val*val;
}
let a=arr.filter(fun)
// console.log(a);
let b=arr.map(fun)
console.log(b);
let arr2=[1,2,3,4,5,6,7,8]
let c=arr2.reduce((x1,x2)=>{//always use 2 arguments in reduce
    return x1*x2;
})
console.log(c);