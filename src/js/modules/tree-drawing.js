'use strict';

// TODO: implement generic solution
function drawTree({height, char}) {

	let width = height * 2;
	let tree = '';
	const space = ' ';

	for (let row = 0; row < height; row++) {
        for(let index = 0; index < width; index++) {
        	tree += char;
		}
		tree += '<br>';
	}

	// Add the roots of the tree
	return tree;

}


export {drawTree};
