(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$q'];
function SignUpController(MenuService, $q) {
  var signup = this;

  signup.submit = function() {
    console.log("submit");
    signup.completed = true;
  }
}

})();
