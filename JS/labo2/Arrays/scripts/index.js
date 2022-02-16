
let familieleden = ["a","b","c","d","e"]
console.log("aantal elementen: " + familieleden.length)

console.log(familieleden[0])
console.log(familieleden[2])
console.log(familieleden[4])


const voegNaamToe = (naam) => {
	naam = prompt();
	familieleden.push(naam);
	console.log(familieleden);
}

console.log(familieleden.toString())

const setup = () => { 

} 


 
window.addEventListener('load',setup); 

















