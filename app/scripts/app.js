'use strict';

/**
 * @ngdoc overview
 * @name listaTareasApp
 * @description
 * # listaTareasApp
 *
 * Main module of the application.
 */
angular
  .module('listaTareasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])

  .config(['localStorageServiceProvider', function(localStorageServiceProvider){

    localStorageServiceProvider.setPrefix('ls');
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });