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
		let optObj = createOptionsObject();
		//console.log("here's your options object", optObj);
		tree(optObj);
	} else {
		//console.log("nothing to see here");
	}
}

function buttonPressHandler() {
	//console.log(event);
	let optsObj = createOptionsObject();
	//console.log("here's your options object", optsObj)
	tree(optsObj);
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

// adding event listeners
treeButton.addEventListener('click', buttonPressHandler);
window.addEventListener('keydown', enterKeyHandler);