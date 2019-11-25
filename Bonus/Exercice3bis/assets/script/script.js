var app = angular.module('app',[]);
app.controller('buttonCtrl', ['$scope',function($scope) {

  $scope.submit = false;

  $scope.buttonValid =  function(isValid){
    if (isValid) {
        $scope.submit = true;
    }  
  };
}]);
