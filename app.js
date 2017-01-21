(function() {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
  $scope.name = "Michael";
  $scope.saySup = function () {
    return "Sup, yo?";
  };
});

})();
