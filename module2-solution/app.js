(function() {
'use strict;'

var initialList = [
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


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getToBuyItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItemAtIndex(itemIndex);
  };
}


function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items =
    ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = initialList;
  // var toBuyItems = initialList;
  // init purchasedItems as empty
  var alreadyBoughtItems = [];

  service.buyItemAtIndex = function(itemIndex){
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    service.buyItem(item.name, item.quantity);
  };

  service.buyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    alreadyBoughtItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  }
}
})();
