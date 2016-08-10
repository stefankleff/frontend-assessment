'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _treeData = require('../src/js/modules/tree-data');

var _test = require('./data/test.data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Transform a Tree Object', function (assert) {

	var actual = (0, _treeData.transformTreeObject)(_test.treeObject);

	assert.deepEqual(actual, _test.treeArray);
	assert.end();
});

(0, _tape2.default)('Get Tree Object', function (assert) {
	assert.ok(_typeof((0, _treeData.getTreeObject)()) === 'object');
	assert.end();
});