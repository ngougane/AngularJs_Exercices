//Déclaration du module
var appValidFormView = angular.module('appValidFormView', ['ngRoute']);
//prends en paramétre $rootScope afin que les controllers héritent de
appValidFormView.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
       templateUrl: 'templates/home.html',
       controller: "mainCtrl"
    }).
    when('/:paramResult',{
      templateUrl :'templates/result.html',
      controller : 'resultCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

appValidFormView.run(function($rootScope) {

    $rootScope.tabs = [];

});


appValidFormView.controller('mainCtrl', ['$rootScope', '$scope', function($rootScope, $scope ) {


  $scope.submit = false; // j'initialise la variable submit à false pour me pemettre de savoir si l'utilsateur à cliquer sur le bouton

// afficher l'onglet courant
  $scope.active = 0; //on initialise l'onglet à 0
  //fonction setActive qui rendra l'onglet cliqué active
  $scope.setActive = function(index){
    //cette variable prend l'onglet courant de l'index cliqué
    $scope.active = index;
  };
  //vérifier si l'onglet est actif
  $scope.isActive = function(index){
    return $scope.active == index;
  };
  // fonction qui rajoute un sujet dans un onglet de manière dynamique
  $scope.addTab = function(isValid){ //je mets en paramétre la fonction isValid
    if (isValid){
      //Si le formulaire est valide
      //j'appelle mon tableau et j'y injecte les éléments saisi dans le formulaire
      $rootScope.tabs.push({
        name : $rootScope.userName,
        mail : $rootScope.userMail,
        subject : $rootScope.userSubject,
        texte : $rootScope.userText
      });
        $scope.submit = true;
      }

    };

}]);

// Contrôleur de la page mailContent
appValidFormView.controller('resultCtrl',['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){


  $rootScope.id = $routeParams.paramResult;

}]);
