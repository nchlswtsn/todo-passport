'use strict';

var app = angular.module('Todo', ['ui.router', 'ui.bootstrap']);

app.constant('localStorageKey', 'user-passport-token');

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/general/home.html', controller: 'homeCtrl' })
    
    .state('login', { url: '/login', templateUrl: '/html/users/login.html', controller: 'loginCtrl' })
    .state('register', { url: '/register', templateUrl: '/html/users/register.html', controller: 'registerCtrl' })

  $urlRouterProvider.otherwise('/');
});
