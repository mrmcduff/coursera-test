(function () {
'use strict';

angular.module('MenuApp')
.component('categoryDetailList', {
  templateUrl: 'src/menuapp/templates/category-detail-list.template.html',
  controller: function() {
    console.log("Hello from the item component");
    console.log(this.items);
  },
  bindings: {
    items: '<'
  }
});

})();
