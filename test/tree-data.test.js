import test from 'tape';
import {transformTreeObject} from '../src/js/modules/tree-data';
import {getTreeObject} from '../src/js/modules/tree-data';
import {treeObject as tree, treeArray} from './data/test.data';

test('Transform a Tree Object', (assert) => {

	const actual = transformTreeObject(tree);

	assert.deepEqual(actual, treeArray,
		'transFormTreeObject should take a tree object, and return an array');
	assert.end();
});


test('Get Tree Object', (assert) => {
	const actual = typeof getTreeObject();
	const expected = 'object';
	assert.equal(actual, expected,
		'getTreeObject should return an object');
	assert.end();
});