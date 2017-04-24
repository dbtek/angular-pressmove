angular = require('angular')

angular.module('ngPressmove', [])
  .directive('pressmove', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        var _mouseDown = false
        var _startPos = [0, 0]
        var _threshold = 1
        var _pressmoveHandler = $parse(attributes.pressmove)

        element.on('mousedown', function(e) {
          _mouseDown = true
          _startPos = [e.clientX, e.clientY]
        })

        element.on('mouseup', function(e) {
          _mouseDown = false
        })

        function mousemoveHandler(e) {
          var startX = _startPos[0]
          var startY = _startPos[1]
          if (_mouseDown && (Math.abs(startX - e.clientX) > _threshold || Math.abs(startY - e.clientY) > _threshold)) {
            e.type = 'pressmove'
            scope.$apply(function() {
              _pressmoveHandler(scope, {
                $event: e
              })
            })
            _startPos = [e.clientX, e.clientY]
          }
        }

        window.addEventListener('mousemove', mousemoveHandler)
        scope.$on('$destroy', function() {
          window.removeEventListener('mousemove', mousemoveHandler, false)
        })
      }
    }
  }])

  module.exports = 'ngPressmove'