'use strict';

var app = angular.module('TodoApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/todos', {
      templateUrl: 'angularapp/templates/todos.html',
      controller: 'TodoCtrl'
    })
    .otherwise({
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
});

app.run(['$rootScope', '$location', 'AuthService', 'FlashService', 
  function($rootScope, $location, AuthService, FlashService) {
  
  var routesThatRequireAuth = ['/todos'];

  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (_(routesThatRequireAuth).contains($location.path()) && !AuthService.isLoggedIn()) {
      FlashService.show("Please log in to continue.");
      $location.path('/login');
    }
  });

}]);
