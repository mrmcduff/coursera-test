(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var infoCtrl = this;
  infoCtrl.sessionFavorite = MenuService.sessionFavorite;
}

})();
