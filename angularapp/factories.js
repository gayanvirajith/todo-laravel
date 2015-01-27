'use strict';

app = angular.module('TodoApp');
  
  app.factory('AuthService', ['$location', '$http', 'SessionService', function($location, $http, SessionService){

    var cacheSession = function() {
      SessionService.set('authenticated', true);
    };

    var uncacheSession = function() {
      SessionService.unset('authenticated', false);
    };

    return {
      login: function(credential) {
        var login = $http.post('/login', credential);
        login.success(cacheSession);
        return login;
      },
      logout: function() {
        var logout = $http.get('/logout');
        logout.success(uncacheSession);
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