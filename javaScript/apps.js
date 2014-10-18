var app = angular.module('sportsDebate', ['ngRoute', 'firebase', 'ngResource']);

app.config(function($routeProvider, $httpProvider){

  //router here
  $routeProvider
  .when('/main', {
  	templateUrl: 'main.html',
  	controller: 'mainCtrl'
  })
  .when('/home', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  })
  .otherwise({
  	redirectTo: '/main'
  });

});