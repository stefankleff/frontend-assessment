import $ from 'jquery';
import {getTreeObject, transformTreeObject} from './modules/tree-data';
import {renderCards} from './modules/cards';

'use strict';

/**
 * @description main entry point
 */
$(() => {
		const treeObject = getTreeObject();
		const treeArray = transformTreeObject(treeObject);

		$('#right').html(renderCards(treeArray))
	}
);
