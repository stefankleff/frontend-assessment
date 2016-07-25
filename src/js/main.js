import $ from 'jquery';

import { renderCards } from './modules/cards';

'use strict';


$(document).ready(() => {

    const $rightColumn = $('.columns#right');
    const cards = renderCards();

    $rightColumn.html(cards);

});
