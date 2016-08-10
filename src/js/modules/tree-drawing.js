'use strict';

/**
 * @description Draws an ascii tree when given a height and a char
 * @param height
 * @param char
 * @returns {string}
 */
function drawTree({height, char}) {

	let tree = '';
	const space = '&nbsp;';
	let spaceCount = height;
	let charCount = 1;

	for (let row = 0; row < height; row++) {
		spaceCount--;

		for (let n = 0; n < spaceCount; n++) {
			tree += space;
		}

		for (let index = 0; index < charCount; index++) {
			tree += char;
		}

		tree += '<br>';
		charCount += 2;
	}

	spaceCount = Math.floor(charCount / 2);
	for (let row = 0; row < spaceCount; row++) {
		tree += space;
	}
	tree += '| |';

	return tree;

}

export {drawTree};
