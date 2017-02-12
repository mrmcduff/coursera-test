(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items', '$stateParams'];
function ItemsController(items, $stateParams) {
  var itemList = this;
  itemList.categoryDetailItems = items;
  console.log($stateParams.fullName);
  console.log("Hello items controller");
  console.log("Number of items is " + items.length);
}

})();
