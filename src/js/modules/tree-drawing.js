'use strict';

const renderTreeData = (treeData) => `<div class="tree-row">${treeData}</div>`;

/**
 * @description Draws an ascii tree when given a height and a char
 * @param height
 * @param char
 * @returns {string}
 */
function drawTree({height, char}) {

	let tree = '';
	let charCount = 1;

	for (let row = 0; row < height; row++) {
		tree += renderTreeData(char.repeat(charCount));
		charCount += 2;
	}

	tree += '<div class="trunk">| |</div>';

	return tree;

}

export {drawTree};
