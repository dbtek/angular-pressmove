# angular-pressmove
Pressmove directive for angular.

### Install
```bash
$ npm i -S angular-pressmove
```

### Usage

Add dependency.
```js
angular = require('angular')
angular.module('myApp', [
  require('angular-pressmove')
])
```

Use directive inside a controller.

```html
  ...
  <div pressmove="handlePressmove($event)">
    ...
  </div>
  ...
```


### Author
Ismail Demirbilek ([@dbtek](https://twitter.com/dbtek))
Licensed under MIT