import test from 'tape';
import {renderCards} from '../src/js/modules/cards';
import {treeArray} from './data/test.data';
import dom from 'cheerio';

test('Render Cards', (assert) => {
	const expectedCards = 1;
	const expectedTrees = 1;
	const expectedRows = 5;
	const $ = dom.load(renderCards(treeArray));
	const actualCards = $('.card').length;
	const actualTrees = $('.tree').length;
	const actualRows = $('.tree-row').length;

	assert.equal(expectedCards, actualCards);
	assert.equal(expectedTrees, actualTrees);
	assert.equal(expectedRows, actualRows);

	assert.end();
});