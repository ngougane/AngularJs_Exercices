var App = angular.module('App',[]);
App.controller('voituresCtrl', function($scope,$http) {
  $http.get('voitures.json').then(function(res){
    $scope.voitures = res.data;
  });
});
