var app = angular.module('sportsDebate');

app.factory('PostService', function ($http,$resource) {
  return $resource('https://FIREBASE-URL.firebaseIO.com/posts/:id.json');
});