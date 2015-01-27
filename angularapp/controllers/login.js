'use strict';

angular.module('TodoApp')
  .controller('LoginCtrl', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService){
      $scope.title = 'Login'
      
      $scope.credential = {
        username: '',
        password: ''
      };

      $scope.login = function() {
        AuthService.login($scope.credential).success(function(){
          $location.path('/todos');
        });
      }
  }]);