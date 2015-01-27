'use strict';

var app = angular.module('TodoApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/todos', {
      templateUrl: 'angularapp/templates/todos.html',
      controller: 'TodoCtrl'
    })
    .otherwise({
      templateUrl: 'angularapp/templates/login.html',
      controller: 'LoginCtrl'
    })
});