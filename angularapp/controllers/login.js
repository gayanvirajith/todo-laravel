'use strict';

angular.module('TodoApp')
  .controller('LoginCtrl', ['$scope', 'AuthService', function($scope, AuthService){
      $scope.title = 'Login'
      
      $scope.credential = {
        username: '',
        password: ''
      };

      $scope.login = function() {
        AuthService.login($scope.credential);
      }
  }]);