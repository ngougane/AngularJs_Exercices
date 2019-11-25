var schoolApp = angular.module('schoolApp',[]);

schoolApp.controller('studentsCtrl',function($scope){
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
