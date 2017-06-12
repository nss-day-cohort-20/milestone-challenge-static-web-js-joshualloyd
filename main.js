// functions
function buildString(character, height, progress) {

	let charWidth = (progress * 2) + 1;
	let blankCharSideWidth = height - (progress + 1);
	let starterString = '';
	starterString += ' '.repeat(blankCharSideWidth);
	starterString += character.repeat(charWidth);
	starterString += ' '.repeat(blankCharSideWidth);

	return starterString;
}

function enterKeyHandler() {
	//console.log(event);
	if ( event.key === "Enter") {
		//console.log("you hit enter");
		if (inputsGood()) {
			let optObj = createOptionsObject();
			//console.log("here's your options object", optObj);
			tree(optObj);
		}
	}
}

function buttonPressHandler() {
	//console.log(event);
	if (inputsGood()) {
		let optsObj = createOptionsObject();
		//console.log("here's your options object", optsObj)
		tree(optsObj);
	}
}

function inputsGood() {
	if (charInput.value.length > 1) {
		console.log("only use one character in the character field");
	} else if (Number(heightInput.value) < 1 ) {
		console.log("only integers greater than zero for the height field");
	} else if (Number(heightInput.value) % 1 !== 0) {
		console.log("no floating point numbers for the height field");
	}	else {
		return true;
	}
}

function createOptionsObject() {
	let optionsObj = {};
	optionsObj.char = charInput.value;
	optionsObj.height = Number(heightInput.value);
	return optionsObj;
}

function tree(options) {
	//loop to build up lines in console
	for (var i = 0; i < options.height ; i++ ) {
	// add a line to the console
		console.log(buildString(options.char, options.height, i));
	}
}


// DOM references
let charInput = document.getElementById('tree-char');
let heightInput = document.getElementById('tree-height');
let treeButton = document.getElementById('tree-button');


// adding event listeners to button and inputs
treeButton.addEventListener('click', buttonPressHandler);
charInput.addEventListener('keydown', enterKeyHandler);
heightInput.addEventListener('keydown', enterKeyHandler);
