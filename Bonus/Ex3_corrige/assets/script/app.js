//On déclare une nouvelle application qui se nomme mailBox
var mailBox = angular.module('mailBox',['ngRoute']);
//la Méthode run est exécuté en premier elle nous permet d'initialiser dès le début mon tableau
mailBox.run('$rootScope', function($rootScope){
    $rootScope.subjectMessageList = [];
    $rootScope.
});

mailBox.controller('formcontroller', ['$scope', '$rootScope', function($scope, $rootScope){
  // À-ÖØ-öø-ÿ est utilisé pour regrouper l'ensemble des accents existants
  $scope.nameRegex = /^[A-Z][a-zÀ-ÖØ-öø-ÿ]+([ \-][A-Z][a-zÀ-ÖØ-öø-ÿ]+)*$/;
  $scope.mailRegex = /^[A-Za-z]+@[a-z]+.[a-z]+$/ ;
  //Déclaration d'une fonction qui va récupéré les données du formulaire
  $scope.sendMessage = function(){
    $rootScope.subjectMessageList.push($scope.subject);
  };
}]);

mailBox.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl:'view/form.html' ,
      controller: 'formcontroller',
    })
    .when('/mailInfo/:index',{
      templateUrl:'view/mailInfo.html' ,
      controller: 'mailInfocontroller',
    });
});

mailBox.controller('mailInfocontroller', ['$scope','$rootScope','$routeParams', function($scope,$rootScope,$routeParams){
  $scope.selectSubject = subjectMessageList[$routeParams.index];

  console.log($routeParams.index);

}]);
