import test from 'tape';
import {renderCards} from '../src/js/modules/cards';
import {treeArray} from './test.data';
import dom from 'cheerio';

test('Render Cards', (assert) => {

	const $ = dom.load(renderCards(treeArray));

	assert.ok($('.card').length > 0);
	assert.ok($('.tree').length > 0);
	assert.ok($('.tree-row').length > 0);

	assert.end();

});