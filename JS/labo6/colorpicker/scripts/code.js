const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	document.getElementById("save").addEventListener("click",saveColor);

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	// maak het blokje rood
	colorDemos[0].style.backgroundColor="rgb(" + 50 +"," + 50 + "," + 50 +")";


}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	let r = document.getElementById("r");
	let g = document.getElementById("g");
	let b = document.getElementById("b");


	r.innerHTML = "R: " + sliders[0].value;
	g.innerHTML = "G: " + sliders[1].value;
	b.innerHTML = "B: " + sliders[2].value;

	colorDemos[0].style.backgroundColor = "rgb(" + sliders[0].value +"," + sliders[1].value + "," + sliders[2].value +")"  ;

}

const saveColor = () => {
	let sliders = document.getElementsByClassName("slider");


	let color = "rgb(" + sliders[0].value +"," + sliders[1].value + "," + sliders[2].value +")"  ;

	let colorList = document.getElementById("colorList");
	// setting up div
	let div = document.createElement("div");
	div.className = "colorDiv";
	div.addEventListener("click",chooseColor);
	div.style.backgroundColor = color;
	// add button
	let button = document.createElement("button");
	button.className = "colorButton";
	button.innerHTML = "X";
	button.addEventListener("click", removeColor);
	div.appendChild(button);
	colorList.appendChild(div);
}

const removeColor = (event) => {
	let colorList = document.getElementById("colorList");
	colorList.removeChild(event.target.parentNode);
}

const chooseColor = (event) => {

	let rgbvalues = event.target.style.backgroundColor.substring(4,event.target.style.backgroundColor.length-1).split(",");

	let sliders = document.getElementsByClassName("slider");
	if(rgbvalues.length === 3){
		sliders[0].value = rgbvalues[0].trim();
		sliders[1].value = rgbvalues[1].trim();
		sliders[2].value = rgbvalues[2].trim();

		document.getElementById("r").innerHTML = "R: " + sliders[0].value;
		document.getElementById("g").innerHTML = "G: " + sliders[1].value;
		document.getElementById("b").innerHTML = "B: " + sliders[2].value;

		document.getElementsByClassName("colorDemo")[0].style.backgroundColor
			= "rgb(" + sliders[0].value +"," + sliders[1].value + "," + sliders[2].value +")"  ;
	}
}


window.addEventListener("load", setup);