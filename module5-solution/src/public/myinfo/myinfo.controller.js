(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var infoCtrl = this;
  infoCtrl.basePath = ApiPath;
  infoCtrl.sessionFavorite = MenuService.sessionFavorite;
}

})();
