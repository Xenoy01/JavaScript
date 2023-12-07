let again;
const canDrive=(age)=>{
    return age>=18?true:false;
}
do {
    
    let age=prompt("Enter your age:")
    age=Number.parseInt(age);
    if (age<0) {
        console.error("Sperms swim karega drive nahi");
        document.body.style.background="Black";//Yee thoda dark humour hai
        break;
    }
    else if (canDrive(age)) {
        alert("Yes you can drive But go get a liscence first");
        document.body.style.background="Green";//colour changes to green cause its ok to drive
    }
    else {
        alert("Sorry, You cant drive yet");
        document.body.style.background="Red";//colour change to red cause its not safe to drive
    }
    // if (age>4) {
    //     location.href="https://google.com";

    // }
    again=confirm("Do you wanna see the eprompt again");//returns a boolean type
    // console.log(typeof again);
} while (again);