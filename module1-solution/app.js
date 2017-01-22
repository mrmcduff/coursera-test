(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchItems="";
  $scope.outputMessage="";

  $scope.countItems = function () {
    var itemArray = $scope.lunchItems.split(',');
    var count = 0;
    for (var i = 0; i < itemArray.length; i++) {
      // Skip the empty items -- otherwise we could just use the array's length.
      if (itemArray[i].trim() != "") {
        count++;
      }
    }

    if (count == 0) {
      $scope.outputMessage="Please enter data first";
    } else if (count > 0 && count <= 3) {
      $scope.outputMessage="Enjoy!";
    } else {
      $scope.outputMessage="Too much!";
    }
  };
};

})();
