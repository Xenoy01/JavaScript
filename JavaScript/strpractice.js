console.log("har\"".length);
let sen="The quick brown fox jumps over the dog";
let word="fox";
console.log(sen.includes(word));
console.log(`The word  "${word}" ${sen.includes(word)? "is": "is not"} in the sentence`);
let name="Adarsh";
console.log(name.endsWith('h'));
console.log(name.toLowerCase());
let str2="Please give Rs 1000";
let amount= Number.parseInt( str2.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof(amount));
