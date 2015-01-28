var app = angular.module('TodoApp')

app.controller('TodoCtrl', ['$scope', '$location', 'AuthService', 'todos',     
  function($scope, $location, AuthService, todos) {
  
  $scope.todos = todos.data;

  $scope.logout = function() {
    AuthService.logout().success(function(){
      $location.path('/login');
    });
  }

}]);

app.controller('TodoEditCtrl', ['$scope', '$http', '$routeParams',  
  'TodoService', function($scope, $http, $routeParams, TodoService) {
  
  $scope.todo = [];

  TodoService.single($routeParams.id).success(function(data) {
    $scope.todo = data;
  });
  
  $scope.update = function() {
    
  }


}]);