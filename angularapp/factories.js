'use strict';

angular.module('TodoApp')
  .factory('AuthService', ['$location', '$http', function($location, $http){
    return {
      login: function(credential) {
        $http.post('/login', credential);
        $location.path('/todos');
      },
      logout: function() {
        $http.get('/logout');
        $location.path('/login');
      }
    };
  }]);