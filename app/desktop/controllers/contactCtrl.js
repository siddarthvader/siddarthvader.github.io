syd.controller('contactCtrl',['$scope','$httpshooter',function($scope,$httpshooter) {
    var contact=this;
    $scope.formData={};
    $scope.name='wow';

    console.log('are we here');
    $scope.sendMail=function(){
        $httpshooter.queue({
            url:'https://formcarry.com/s/xbvLW5gkWbB',
            method:'POST',
            data:$scope.formData    
        }).then(function(data){
             $scope.formData={}; 
             $scope.success=true;
        },function(){
            console.log('failed');
        })   
    }
}])