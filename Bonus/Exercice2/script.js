var app = angular.module('app',[]);
app.controller('buttonCtrl', ['$scope',function($scope) {

  $scope.buttonAlert =  function(){
    alert("test");
  };
}]);
