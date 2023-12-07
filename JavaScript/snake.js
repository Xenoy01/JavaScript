//Creating a function to generate a character
const Char= ()=>{
    let opt= ['S','W','G'];
    const point= Math.floor(Math.random()*opt.length);
    return opt[point];
}
let condition;
do {
    let player=prompt("Enter S: For Snake, W: For water, G: For Gun");
    let comp_char=Char();//Calling function to generate a random character
    // alert("The Computer character is",comp_char);
    //Checking For Winning Condition
    if (player=="S" && comp_char!="G") {
        alert("You win");
    }
    else if (player=="W" && comp_char!="S") {
        alert("You win");
    }
    else if (player== "G" && comp_char!="W") {
        alert("You win");
    }
    else if(player=="S"||player=="W"||player=="G"){
        alert("Sorry You lost");
    }
    else{
        alert("Enter a valid Character")
    }
    condition=confirm("Do you wanna Play Agin");//Asking the player to Continue the game or not
} while (condition);
