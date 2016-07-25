import $ from 'jquery';

import { renderCards } from './modules/cards';

'use strict';


$(() => {

    const $rightColumn = $('#right');
    const cards = renderCards();

    $rightColumn.html(cards);

});
