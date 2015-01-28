angular.module('TodoApp')
  .controller('TodoCtrl', ['$scope', '$location', 'AuthService', 'todos',     
    function($scope, $location, AuthService, todos) {
    
    $scope.todos = todos.data;

    $scope.logout = function() {
      AuthService.logout().success(function(){
        $location.path('/login');
      });
    }

  }]);