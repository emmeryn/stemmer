# angular-stemmer

AngularJS module containing [Titus Wormer's implementation](https://github.com/wooorm/stemmer) of the [Porter stemming algorithm](http://tartarus.org/martin/PorterStemmer/).

## Installation
[Bower](http://bower.io/#install-packages):

```bash
$ bower install emmeryn/angular-stemmer
```

## Usage
### Add module to your application.
#### index.html
```html
<script src="bower_components/angular-stemmer.js"></script>
```

#### app.js
```javascript
(function() {
  angular
    .module('app', ['angular-stemmer'])
    .controller('AppController', controller);

    controller.$inject = ['ngStemmer']

    function controller(ngStemmer) {
      stemmer("considerations"); // "consider"
      stemmer("detestable"); // "detest"
      stemmer("vileness"); // "vile"
    }

})();
```