'use strict';

/*
 * Dependencies.
 */

var stemmer = require('wooorm/stemmer@0.1.4');

/*
 * DOM nodes.
 */

var $input = document.getElementsByTagName('input')[0];
var $output = document.getElementsByTagName('output')[0];

/*
 * Handlers.
 */

function oninputchange() {
    $output.textContent = stemmer($input.value);
}

/*
 * Listen.
 */

$input.addEventListener('input', oninputchange);

/*
 * Initial answer.
 */

oninputchange();
