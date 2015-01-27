'use strict';

app = angular.module('TodoApp');
  
app.factory('AuthService', ['$location', '$http', 'SessionService', 
  'FlashService', function($location, $http, SessionService, FlashService){

  var cacheSession = function() {
    SessionService.set('authenticated', true);
  };
  
  var uncacheSession = function() {
    SessionService.unset('authenticated', false);
  };

  var showMessage = function(response) {
    FlashService.show(response.message);
  };

  return {
    login: function(credential) {
      var login = $http.post('/login', credential);
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