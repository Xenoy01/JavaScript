let num= Math.floor( Math.random()*100)+1;//Generating a random number
// console.log(num);
let a;
let b=0;
do {
    a=prompt("Enter your number between 1-100");//Taking the input from the user
    a=Number.parseInt(a);//Converting it to string
    if (a>num) {//Condition check
        console.log("your number is greater than the given number");
    } else if (a<num){
        console.log("Your number is smaller than the given number");
    }
    b=b+1;//adding the no. of tries
} while (a!=num);
//Printing the Output
console.log("Congratulation You guessed the right number");
console.log("Your total no. of try is",b);
console.log(`Your score is ${100-b} and the number is ${num}`);