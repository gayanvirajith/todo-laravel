'use strict';

var app = angular.module('TodoApp', [
  'underscore',
  'ui.bootstrap',
  'ngRoute'
]);

app.run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {

  // var routesThatRequireAuth = ['/todos'];

  // $rootScope.$on('$routeChangeStart', function(event, next, current) {
  //   if (_(routesThatRequireAuth).contains($location.path()) && !AuthService.isLoggedIn()) {
  //     $location.path('/login');
  //   }
  // });
alert("Hello");

}]);


