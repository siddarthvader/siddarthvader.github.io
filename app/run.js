// we set app here

syd.run(function($state,$timeout,$rootScope) {
    console.info('iadhr');

    $timeout(function(){
        document.getElementById('target-elem').classList.add('element');
    },12000)

    $rootScope.$on('$stateChangeSuccess',function(){
        document.body.scrollTop=0;
    });
    

    $state.go('ground.about');
});