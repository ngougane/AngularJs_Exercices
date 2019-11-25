var appFormViews = angular.module('appFormViews',[]);

appFormViews.controller('mainCtrl', ['$scope',function($scope) {
//initialisation d'un tableau
  $scope.tabs = [];

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
      $scope.tabs.push({
        name : $scope.userName,
        mail : $scope.userMail,
        subject : $scope.userSubject,
        texte : $scope.userText
      });
        $scope.submit = true;
      }

    };

}]);
