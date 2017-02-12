(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items', '$stateParams'];
function ItemsController(items, $stateParams) {
  var itemList = this;
  itemList.categoryDetailItems = items;
  itemList.name = $stateParams.fullName;
}

})();
