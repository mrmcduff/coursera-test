(function () {
'use strict';

angular.module('DataModule')
.service('MenuDataService', MenuDataService)
.constant('CategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemsPath'];
function MenuDataService($http, CategoriesPath, ItemsPath) {
  var service = this;

  service.getCategories = function() {
    return $http({
      method: "GET",
      url: (CategoriesPath),
    }).then(function(result) {
      return result.data;
    }).catch(function (error) {
      console.log(error);
    });
  };

  service.getItemsForCategory = function(shortName) {
    console.log("Starting path is " + ItemsPath );
    console.log("Short name is " + shortName);
    var totalPath = ItemsPath + shortName;
    console.log("Fetching from " + totalPath);
    return $http({
      method: "GET",
      url: (totalPath)
    }).then(function(result) {
      console.log("Result for category " + shortName + " is " + result);
      return result.data.menu_items;
    });
  };

  service.getItemsForCategoryObject = function(categoryObject) {
    console.log("Starting path is " + ItemsPath );
    console.log(categoryObject);
    // console.log("Short name is " + shortName);
    var totalPath = ItemsPath + categoryObject.short_name;
    console.log("Fetching from " + totalPath);
    return $http({
      method: "GET",
      url: (totalPath)
    }).then(function(result) {
      console.log("Result for category " + shortName + " is " + result);
      return result.data.menu_items;
    });
  };

  return service;
}

})();
