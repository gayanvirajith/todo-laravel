angular.module('TodoApp')
  .controller('TodoCtrl', ['$scope', 'AuthService', function($scope, AuthService) {

    $scope.logout = function() {
      AuthService.logout();
    }
  }]);