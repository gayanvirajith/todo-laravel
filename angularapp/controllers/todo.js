angular.module('TodoApp')
  .controller('TodoCtrl', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {

    $scope.logout = function() {
      AuthService.logout().success(function(){
        $location.path('/login');
      });
    }

  }]);