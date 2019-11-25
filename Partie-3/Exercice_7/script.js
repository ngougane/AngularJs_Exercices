var app = angular.module('testApp', []);

app.controller('phonesCtrl', function($scope) {
    $scope.phones = [
        {'phoneModel': 'G7',  'brand': 'LG'},
        {'phoneModel': 'Galaxy S7 Edge', 'brand': 'Samsung'},
        {'phoneModel': 'iPhone7',  'brand': 'Apple'},
        {'phoneModel': '50b Helium 4G', 'brand': 'Archos'},
        {'phoneModel': 'One A9', 'brand': 'HTC'},
        {'phoneModel': '8', 'brand': 'Nokia'},
        {'phoneModel': 'Zenphone 2',  'brand': 'Asus'}
    ];
});
