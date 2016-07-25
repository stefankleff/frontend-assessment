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

const TREE_ARRAY = [
    {
        name: 'starTree',
        height: 5,
        char: '*',
        description: 'This is a decent tree.'
    },
    {
        name: 'dollarTree',
        height: 6,
        char: '$',
        description: 'This is the most expensive tree'
    },
    {
        name: 'highTree',
        height: 7,
        char: '#',
        description: 'This is the mightiest tree.'
    },
];



function getTreeObject () {
    return TREE_OBJECT;
}

function transformTreeObject (treeObject) {
    // TODO: implement transformation: object -> array
    // TODO: filter trees without char property
    // TODO: sort trees by height (desc)

    return TREE_ARRAY;
}

export { getTreeObject, transformTreeObject };
