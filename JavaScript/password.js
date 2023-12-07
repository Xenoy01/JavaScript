let opt="ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz1234567890";
let passsword='';
for (let index = 0; index <6; index++) {
    const ra=Math.floor(Math.random()*opt.length);
    passsword+=opt[ra];
}
console.log(passsword);