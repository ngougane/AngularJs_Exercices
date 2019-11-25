var app = angular.module('app',[]);


app.factory('Tabs',[function(){
  var tabs = {
    active :0,
    isActive : function(index){
      return this.active == index;
    },
    setActive : function(index){
      this.active = index;
    },
    addTab : function(name, mail, subject, texte){
      var tab = new Tabs();
      tab.name = userName;
      tab.mail = userMail;
      tab.subject = userSubject;
      tab.texte = userText;
    },
};
return tabs;
}]);

app.controller('mainCtrl', ['$scope','Tabs', function($scope, Tabs) {

  $scope.active = 0;
  $scope.tabs = [];
  $scope.submit = false;
  $scope.isActive = Tabs.isActive;


  // fonction qui rajoute un sujet dans un onglet de manière dynamique
  $scope.addTab = function(isValid){//je mets en paramétre la fonction isValid
    if (isValid){
      Tabs.addTab($scope.tab.userName, $scope.tab.userMail, $scope.tab.userSubject, $scope.tab.userText);
    }
      $scope.submit = true;
    }
  }

]);

app.controller('resultCtrl', ['$scope','Tabs', function($scope, Tabs){



}]);
