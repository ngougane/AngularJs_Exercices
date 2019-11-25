var app = angular.module('app',['ngRoute']);
//on configure les dépendances et on prends en paramètre ngRoute
app.config(['$routeProvider', function($routeProvider){
  //configuration des routes avec l'instruction when
  $routeProvider.
      when('/home', {
        templateUrl : 'templates/home.html',
        controller : 'mainCtrl'
      }).
      when('/result/:result_id', {
        templateUrl : 'templates/result.html',
        controller : 'mainCtrl'
      }).
      otherwhise({
        redirectTo : '/home'
      });
}]);

app.controller('mainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  //déclaration d'une variable indiquant l'index de la page result à prendre dans $routeParams
  var result_id = $routeParams.page_id;
//initialisation d'un tableau
  $scope.tabs = [];
// afficher l'onglet courant
  $scope.active = 0; //on initialise l'onglet à 0
  $scope.submit = false; // j'initialise la variable submit à false pour me pemettre de savoir si l'utilsateur à cliquer sur le bouton

  //fonction setActive qui rendra l'onglet cliqué active
  $scope.setActive = function(index){
    //cette variable prend l'onglet courant de l'index cliqué
    //je pourrai ainsi affiché l'index courant
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
      $scope.tabs.push({
        name : $scope.userName,
        mail : $scope.userMail,
        subject : $scope.userSubject,
        texte : $scope.userText
      });
      }
      $scope.submit = true;
    };
}]);
