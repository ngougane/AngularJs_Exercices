var testApp = angular.module('app',[]);

testApp.controller('testCtrl', function($scope){
  $scope.firstSentence = 'L\'Axolotl, Ambystoma mexicanum, est une espèce d\'urodèles de la famille des Ambystomatidae.';
  $scope.secondSentence = 'L\'ORNITHORYNQUE (ORNITHORHYNCHUS ANATINUS) EST UN ANIMAL SEMI-AQUATIQUE ENDÉMIQUE DE L\'EST DE L\'AUSTRALIE, Y COMPRIS LA TASMANIE.';
});
