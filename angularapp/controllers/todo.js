angular.module('TodoApp')
  .controller('TodoCtrl', ['$scope', '$location', 'AuthService', 'expiry',     
    function($scope, $location, AuthService, expiry) {

    $scope.expiry = expiry.data;
    $scope.logout = function() {
      AuthService.logout().success(function(){
        $location.path('/login');
      });
    }

  }]);