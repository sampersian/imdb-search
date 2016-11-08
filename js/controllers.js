app.controller('HomeController', function($scope, $http) {
  $scope.view = {};
  $scope.view.mainHeader = "Angular OMDb API Search";
  $scope.view.search = function() {
    $http.get('http://www.omdbapi.com/?t='+$scope.view.searchTerm)
    .then((data) => {
      $scope.view.movie = data.data;
      console.log($scope.view.movie);
    })
  }
})
.controller('ResultsController', function($scope, $http, $routeParams) {
  $scope.view = {};
  $scope.view.mainHeader = "Movie Information";
  console.log($routeParams.imdbID);
  $http.get('http://www.omdbapi.com/?i='+$routeParams.imdbID)
  .then((data) => {
    $scope.view.movie = data.data;
    console.log($scope.view.movie);
  })

});
