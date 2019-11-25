/**
 * Déclaration de l'application form
 */
var form = angular.module('form',['ngRoute']);
form.run(['$rootScope',function($rootScope){
  $rootScope.subjects = [];
  $rootScope.lastnames = [];
  $rootScope.emails = [];
  $rootScope.texts = [];
}]);
/**
 * Configuration du module principal : form
 */
form.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'partials/form.html', controller: 'formCtrl'})
    .when('/mailcontent/:index', {templateUrl: 'partials/mailContent.html', controller: 'mailContentCtrl'})
    .otherwise({redirectTo: '/'});
  });
  /**
 * Définition des contrôleurs
 */
 // Contrôleur de la page formulaire
form.controller('formCtrl',['$scope', '$rootScope', function($scope, $rootScope){
  $rootScope.showSubject = function(){
    $rootScope.subjects.push($scope.userSubject);
    $rootScope.lastnames.push($scope.userLastname);
    $rootScope.emails.push($scope.userEmail);
    $rootScope.texts.push($scope.userText);
  };
}]);
// Contrôleur de la page mailContent
form.controller('mailContentCtrl',['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
  $scope.subject = $rootScope.subjects[$routeParams.index];
  $scope.lastname = $rootScope.lastnames[$routeParams.index];
  $scope.email = $rootScope.emails[$routeParams.index];
  $scope.text = $rootScope.texts[$routeParams.index];
}]);
