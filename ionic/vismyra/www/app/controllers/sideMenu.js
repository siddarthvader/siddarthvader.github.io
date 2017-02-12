vapp.controller('sideMenuCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    var sideMenu = this;
    $scope.text = 'Powered by Bailfire Labs';
    $scope.categories = ['Wall clock', 'Wooden keyholder', 'Spirtual Art', 'Wall hangings'];
    $scope.showCategory = function (cat) {
          $rootScope.category=cat;  
    }

}]);