(function () {
'use strict';

angular.module('MenuApp')
.component('categoryDetailList', {
  templateUrl: 'src/menuapp/templates/category-detail-list.template.html',
  bindings: {
    items: '<',
    name: '@'
  }
});

})();
