import test from 'tape';
import {transformTreeObject} from '../src/js/modules/tree-data';
import {getTreeObject} from '../src/js/modules/tree-data';
import {treeObject as tree, treeArray} from './data/test.data';

test('Transform a Tree Object', (assert) => {

	const actual = transformTreeObject(tree);

	assert.deepEqual(actual, treeArray);
	assert.end();
});


test('Get Tree Object', (assert) => {
	assert.ok(typeof getTreeObject() === 'object');
	assert.end();
});