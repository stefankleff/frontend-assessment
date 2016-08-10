const treeObject = {
	"testTree": {
		"height": 5,
		"char": "*",
		"description": "tree"
	},
	"badTree": {
		"height": 8,
		"description": "This should not be a part of the array."
	}
};

const treeArray = [
	{char: '*', description: 'tree', height: 5, name: 'testTree'}
];

export {treeObject, treeArray};