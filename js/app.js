var app = angular.module("myApp", ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/:imdbID', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })

      $locationProvider.html5Mode(true);
});
