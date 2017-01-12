angular.module('angular-vterminal',[]).directive('terminal',['$rootScope',function($rootScope){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            var canvas = element[0];
            var ctx=canvas.getContext('2d');
             var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (30, 30, 50, 50);

             ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
             ctx.strokeRect(10,50,50,50);   

            // ctx.fillRect (30, 30, 50, 50);
        
        }

    }
}]);
