(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;
  signup.user = {};
  signup.notFound = false;

  signup.submit = function() {
    console.log("submit");
    if (signup.user.favorite) {
      signup.notFound = false;
      var promise = MenuService.getSingleItemPromise(signup.user.favorite.toUpperCase());
      promise.then(function (response) {
        console.log(response.data);
        MenuService.storeSessionFavorite(response.data);
        console.log("Service item:");
        console.log(MenuService.sessionFavorite);
        signup.completed = true;
      })
      .catch(function (error) {
        console.log("Caught an error");
        console.log(error);
        MenuService.storeSessionFavorite(null);
        signup.notFound = true;
      })
    } else {
      signup.completed = false;
    }
  }
}

})();
