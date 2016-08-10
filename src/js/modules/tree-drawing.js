'use strict';

// TODO: implement generic solution
function drawTree({height, char}) {

	// Take the height, and calc the width
	// For each row, calc the number of chars before
	// We have to write a tree val
	let width = height * 2;
	let tree = '';
	const space = ' ';

	for (let row = 0; row < width; row++) {
        for(let index = 0; index < row; index++) {
        	tree += char;
		}
		tree += '<br>';
	}

	// Add the roots of the tree

	return tree;

}


export {drawTree};
