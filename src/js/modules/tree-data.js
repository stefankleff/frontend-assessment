const TREE_OBJECT = {
	starTree: {
		height: 5,
		char: '*',
		description: 'This is a decent tree.'
	},

	wrongTree: {
		height: 8,
		description: 'This is a wrong tree.'
	},

	highTree: {
		height: 7,
		char: '#',
		description: 'This is the mightiest tree.'
	},

	dollarTree: {
		height: 6,
		char: '$',
		description: 'This is the most expensive tree'
	}
};

/**
 * @description returns the tree object
 * @returns {{starTree: {height: number, char: string, description: string}, wrongTree: {height: number, description: string}, highTree: {height: number, char: string, description: string}, dollarTree: {height: number, char: string, description: string}}}
 */
function getTreeObject() {
	return TREE_OBJECT;
}

/**
 * @description Sorts trees by height in descending order
 * @param a
 * @param b
 * @returns {number}
 */
function sortTreesByHeightDesc(a,b) {
	if(a.height < b.height) {
		return 1;
	}
	if(a.height > b.height){
		return -1;
	}
	return 0;
}

/**
 * @description filter trees without char prop. sort trees by height (desc)
 * @param treeObject
 * @returns {Array.<*>}
 */
function transformTreeObject(treeObject) {

	let trees = [];
	let currentTree = {};

	for (let tree in treeObject) {
		if (treeObject.hasOwnProperty(tree)) {
			currentTree = treeObject[tree];
			currentTree.name = tree;
			trees.push(currentTree);
		}
	}

	return trees
		.filter((tree) => tree.hasOwnProperty('char'))
		.sort(sortTreesByHeightDesc);

}

export {getTreeObject, transformTreeObject};
