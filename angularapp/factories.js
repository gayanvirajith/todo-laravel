'use strict';

var app = angular.module('TodoApp');
  
app.factory('AuthService', ['$location', '$http', 'SessionService', 
  'FlashService', '$sanitize', 'CSRF_TOKEN', function($location, $http, SessionService, 
    FlashService, $sanitize, CSRF_TOKEN){

  var cacheSession = function() {
    SessionService.set('authenticated', true);
  };
  
  var uncacheSession = function() {
    SessionService.unset('authenticated', false);
  };

  var showMessage = function(response) {
    FlashService.show(response.message);
  };

  var sanitizeCredential = function(credential) {
    return {
      username: $sanitize(credential.username),
      password: $sanitize(credential.password),
      csrf_token: CSRF_TOKEN
    };
  };

  return {
    login: function(credential) {
      var login = $http.post('/login', sanitizeCredential(credential));
      login.success(cacheSession);
      login.success(showMessage);
      login.error(showMessage);
      return login;
    },
    logout: function() {
      var logout = $http.get('/logout');
      logout.success(uncacheSession);
      logout.success(showMessage);
      logout.error(showMessage)
      return logout;
    },
    isLoggedIn: function() {
      return SessionService.get('authenticated');
    }
  };
}]);

app.factory('SessionService', ['$window', function($window) {

  return {
    get: function(key) {
      // return $window.localStorage && $window.localStorage.getItem(key);
      return $window.sessionStorage && $window.sessionStorage.getItem(key);
    },
    set: function(key, val) {
      // return $window.localStorage && $window.localStorage.setItem(key, val);
      return $window.sessionStorage && $window.sessionStorage.setItem(key, val);
    },
    unset: function(key) {
      // return $window.localStorage && $window.localStorage.removeItem(key);
      return $window.sessionStorage && $window.sessionStorage.removeItem(key);
    }
  };

}]);

app.factory('FlashService', ['$rootScope', function($rootScope) {
  return {
    show: function(flash) {
      $rootScope.message = flash;
    },
    clear: function() {
      $rootScope.message = "";
    }
  };
}]);

app.factory('TodoService', ['$http', function($http){
  return {
    get: function() {
      return $http.get('/todos');
    },
    single: function(id) {
      return $http.get('/todo/' + id);
    },
    edit: function(todo) {
      var edit = $http.put('/todo/edit/'+todo.id, edit);
      return edit;
    }
  };
}]);