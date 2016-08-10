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
	let treeData = '';
	let charCount = 1;

	for (let row = 0; row < height; row++) {

		for (let index = 0; index < charCount; index++) {
			treeData += char;
		}

		tree += renderTreeData(treeData);
		charCount += 2;
		treeData = '';
	}

	tree += '<div class="trunk">| |</div>';

	return tree;

}

export {drawTree};
