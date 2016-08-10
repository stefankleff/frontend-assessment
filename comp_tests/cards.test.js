'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _cards = require('../src/js/modules/cards');

var _test = require('./data/test.data');

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Render Cards', function (assert) {

	var $ = _cheerio2.default.load((0, _cards.renderCards)(_test.treeArray));

	assert.ok($('.card').length > 0);
	assert.ok($('.tree').length > 0);
	assert.ok($('.tree-row').length > 0);

	assert.end();
});