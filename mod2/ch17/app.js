(function() {
'use strict;'

var shoppingList1 =  [
  "Milk",
  "Cheese",
  "Apples",
  "Peanut Butter",
  "Proscuitto"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "1"
  },
  {
    name: "Cheese",
    quantity: "2"
  },
  {
    name: "Apples",
    quantity: "3"
  },
  {
    name: "Peanut Butter",
    quantity: "1"
  },
  {
    name: "Proscuitto",
    quantity: "4"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

})();
