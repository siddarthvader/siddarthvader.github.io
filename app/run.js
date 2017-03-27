// we set app here

syd.run(function($state,$timeout) {
    console.info('iadhr');

    $timeout(function(){
        document.getElementById('target-elem').classList.add('element');
    },12000)
    

    $state.go('ground.about');
});