var stemmer = require('stemmer');
var inputElement = document.getElementsByTagName('input')[0];
var outputElement = document.getElementsByTagName('output')[0];

function stem(value) {
    outputElement.textContent = stemmer(inputElement.value);
}

inputElement.addEventListener('input', function (event) {
    stem();
});

stem();
