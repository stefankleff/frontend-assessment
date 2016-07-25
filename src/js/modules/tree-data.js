const TREE_OBJECT = {
    starTree: {
        height: 5,
        char: '*',
        description: 'This is a decent tree.'
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
        name: 'highTree',
        height: 7,
        char: '#',
        description: 'This is the mightiest tree.'
    },
    {
        name: 'dollarTree',
        height: 6,
        char: '$',
        description: 'This is the most expensive tree'
    }
];



function getTreeObject () {
    return TREE_OBJECT;
}

function transformTreeObject (treeObject) {

    // TODO: implement transformation: object -> array

    return TREE_ARRAY;
}

export { getTreeObject, transformTreeObject };
