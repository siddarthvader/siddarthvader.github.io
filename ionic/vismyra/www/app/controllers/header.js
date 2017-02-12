vapp.controller('headerCtrl',['$scope',function($scope,$ionicSideMenuDelegate){
    var header=this;
    $scope.text='VISMYRA';

    $scope.openSideMenu=function(){
        // $ionicSideMenuDelegate.toggleLeft();
    }
}]);