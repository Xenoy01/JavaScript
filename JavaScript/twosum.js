function twosum(arr1,target) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i+1; j < arr1.length; j++) {
            let sum = arr1[i]+arr1[j];
            if (sum==target) {
             a=j;
            var b=j+1;
            var c=true
            }
            if(c){
             console.log("the index are "+a+" "+b);
             break
         } else {
             console.log("Sum not found");
         
    }
            
            
        }
            }
}
arr=[1,2,4,3,6,7,8,9];
twosum(arr,11);