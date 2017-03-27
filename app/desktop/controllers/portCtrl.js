syd.controller('portCtrl',function($scope,$state) {
    // console.info('unreal fast');
    var deterClass=function(){
        $scope.loaderPos ='';
        switch($state.current.name){
            case 'ground.work':{
                $scope.loaderPos='l20';
                break;
            }
            case 'ground.about':{
                $scope.loaderPos='l0';
                 break;
            }
            case 'ground.contact':{
                $scope.loaderPos='l60';
                 break;
            }
            case 'ground.blog':{
                $scope.loaderPos='l40';
                 break;
            }
            case 'ground.readme':{
                $scope.loaderPos='l80';
                 break;
            }
        }
    }

    $scope.$on('$stateChangeSuccess',function(){
        deterClass();
    });
})