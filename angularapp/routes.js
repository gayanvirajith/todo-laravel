'use strict';

var app = angular.module('TodoApp');

app.config(function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/todos', {
      templateUrl: 'angularapp/templates/todos.html',
      controller: 'TodoCtrl',
      resolve: {
        todos: function(TodoService) {
          return TodoService.get();
        } 
      }
    })
    .when('/todo-edit/:id', {
      templateUrl: 'angularapp/templates/todo-item.html',
      controller: 'TodoEditCtrl',
    })
    .otherwise({
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
});

app.run(['$rootScope', '$location', 'AuthService', 'FlashService', 
  function($rootScope, $location, AuthService, FlashService) {
  
  var routesThatRequireAuth = ['/todo', '/todo-edit'];

  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (_(routesThatRequireAuth).contains($location.path()) && !AuthService.isLoggedIn()) {
      FlashService.show("Please log in to continue.");
      $location.path('/login');
    }
  });

}]);

app.config(['$httpProvider', function($httpProvider){

  var logOutUserOn401 = function($location, $q, SessionService, FlashService) {

    var success = function(response) {
      return response;
    };

    var error = function(response) {
      if (response.status === 401) {
        SessionService.unset('authenticated');
        console.log(response.data);
        FlashService.show(response.data.message);
        $location.path('/login');
        return $q.reject(response);
      } else {
        return $q.reject(response);
      }
    };

    return function(promise) {
      return promise.then(success, error);
    }

  }
}]);

