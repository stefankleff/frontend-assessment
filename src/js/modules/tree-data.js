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

function getTreeObject() {
	return TREE_OBJECT;
}

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
		.sort(sortTreesByHeightDesc)
		.filter((tree) => tree.hasOwnProperty('char'));

}

export {getTreeObject, transformTreeObject};
