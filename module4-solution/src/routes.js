(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categorylist.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }
  })

  // // Item detail
  // .state('categoryDetail', {
  //   url: '/category-detail/{categoryShortName}',
  //   templateUrl: 'src/menuapp/templates/category-detail-main.template.html',
  //   controller: 'ItemsController as itemList',
  //   resolve: {
  //     items: ['MenuDataService',
  //     function (MenuDataService, $stateParams) {
  //       return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  //     }]
  //   }
  // });

  .state('categoryDetail', {
    url: '/category-detail/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/category-detail-main.template.html',
    controller: 'ItemsController as itemsList',
    params: {
      fullName: null
    },
    resolve: {
      items: ['$http', '$stateParams',
      function ($http, $stateParams) {
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + $stateParams.categoryShortName)
        }).then(function(result) {
          return result.data.menu_items;
        });
      }]
    }
  });
}

})();
