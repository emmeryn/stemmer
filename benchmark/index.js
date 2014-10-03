'use strict';

/* eslint-disable no-cond-assign */

/**
 * Dependencies.
 */

var fs,
    stemmer;

stemmer = require('..');
fs = require('fs');

/**
 * Optional dependencies.
 */

var natural,
    porterStemmer,
    hasError;

try {
    porterStemmer = require('porter-stemmer').stemmer;
} catch (error) {
    hasError = true;
}

try {
    natural = require('natural').PorterStemmer.stem;
} catch (error) {
    hasError = true;
}

if (hasError) {
    console.log(
        '\u001B[0;31m' +
        'The libraries needed by this benchmark could not be found. ' +
        'Please execute:\n' +
        '\tnpm run install-benchmark\n\n' +
        '\u001B[0m'
    );
}

/**
 * Fixtures.
 */

var fixtures;

fixtures = fs.readFileSync('./spec/input.txt', 'utf-8')
    .split('\n')
    .slice(0, 1000);

/**
 * Fixture loop.
 */

function forEachFixture(callback) {
    var index;

    index = fixtures.length;

    while (index--) {
        callback(fixtures[index]);
    }
}

/**
 * Benchmarks.
 */

suite('stemmer — this module', function () {
    bench('op/s * 1,000', function () {
        forEachFixture(stemmer);
    });
});

if (porterStemmer) {
    suite('porterStemmer', function () {
        bench('op/s * 1,000', function () {
            forEachFixture(porterStemmer);
        });
    });
}

if (natural) {
    suite('natural - fails on 558 out of 23532 unit tests', function () {
        bench('op/s * 1,000', function () {
            forEachFixture(natural);
        });
    });
}
