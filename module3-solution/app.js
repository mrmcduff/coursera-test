(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', MenuSearchDirective)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

function MenuSearchDirective() {
  var ddo = {
    templateUrl: "founditems.html",
    scope: {
      items: '<',
      started: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;

  controller.searchTerm = "";
  controller.found = [];
  controller.started = false;
  controller.search = function() {
    controller.started = false;
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    promise.then(function (response) {
      controller.found = response;
      // We don't want to show "No items found" at the very beginning, so
      // trigger the flag as soon as the first search is performed.
      controller.started = true;
    })
    .catch(function (error) {
      // Should at least say we didn't find anything if there's an error.
      controller.found = [];
      controller.started = true;
      console.log(error);
    })
  };

  controller.removeItem = function(itemIndex) {
    controller.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    console.log("Searching for " + searchTerm);
    console.log("Reaching out to API at " + ApiPath);
    return $http({
      method: "GET",
      url: (ApiPath),
    }).then(function(result) {
      var foundItems = result.data.menu_items;
      if (searchTerm === "") {
        // Return an empty array if no search term is entered.
        return [];
      }

      // Let's not iterate and remove from the same array.
      var filteredItems = [];
      for (var i = 0; i < foundItems.length; i++) {
        var itemDescription = foundItems[i].description.toLowerCase();
        if (itemDescription.indexOf(searchTerm) !== -1) {
          filteredItems.push(foundItems[i]);
        }
      }
      return filteredItems;
    }).catch(function (error) {
      console.log(error);
    });
  };

  return service;
}

})();
