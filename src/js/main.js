import $ from 'jquery';

import { renderCards } from './modules/cards';

'use strict';

/**
 * @description main entry point
 */
$(() =>
	$('#right').html(renderCards())
);
