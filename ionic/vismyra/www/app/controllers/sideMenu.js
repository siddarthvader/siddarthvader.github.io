vapp.controller('sideMenuCtrl', ['$scope', '$rootScope', '$state','$ionicScrollDelegate', function ($scope, $rootScope, $state,$ionicScrollDelegate) {
    var sideMenu = this;
    $scope.text = 'Powered by Bailfire Labs';
    $scope.categories = ['All', 'Wall clock', 'Wooden keyholder', 'Spirtual Art', 'Wall hangings'];
    $scope.showCategory = function (cat) {

        if (cat == 'All') {
            $rootScope.category = '';
        }
        else {
            $rootScope.category = cat;
        }
        $rootScope.categoryGroup = cat;



        if ($state.$current.name != 'home') {
            $state.go('home');
        }
        $ionicScrollDelegate.scrollTop(true);
    }

}]);