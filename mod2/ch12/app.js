(function() {
'use strict;'
angular.module('CustomFilterModule', [])
.controller('CustomFilterController', CustomFilterController)
.filter('capital', CapitalizeFilterFactory);

CustomFilterController.$inject = ['$scope', 'capitalFilter'];

function CustomFilterController($scope, capitalFilter) {
  $scope.userInput = "";
  $scope.capitalize = function () {
    $scope.userInput = capitalFilter($scope.userInput);
  };
  $scope.showNumberOfWatchers = function() {
    console.log("# of watchers: ", $scope.$$watchersCount)
  }
}

function CapitalizeFilterFactory() {
  return function(input) {
            input = input || "";
            var wordArray = input.split(' ');
            var outputString = "";
            for (var i = 0; i < wordArray.length; i++) {
              var word = wordArray[i].trim();
              if (word == "") {
                continue;
              }
              var remainder = word.length > 1 ? word.slice(1) : "";
              word = word.charAt(0).toUpperCase() + remainder;
              outputString += word;
              outputString += ' ';
            }

            var changedInput = outputString.trim();
            return changedInput;
         };
}

console.log(CustomFilterController.toString());

})();
