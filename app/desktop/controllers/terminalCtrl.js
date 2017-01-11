syd.controller('terminalCtrl',['$scope',function($scope) {
    var terminal=this;
    $scope.isClose=true;
    $scope.toggle=function(){
        $scope.isClose=!$scope.isClose;
    }
  

}])