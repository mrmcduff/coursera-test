(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  var categoryList = this;
  categoryList.items = items;

  categoryList.getShortNameAtIndex = function (index) {
    console.log("get short name at " + index);
    var categoryObject = categoryList[index];
    return categoryObject.short_name;
  };
}

})();
