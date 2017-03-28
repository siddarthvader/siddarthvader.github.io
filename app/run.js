// we set app here

syd.run(function ($state, $timeout, $rootScope) {
    console.info('iadhr');

    $timeout(function () {
        document.getElementById('target-elem').classList.add('element');
    }, 12000)



    $rootScope.$state = $state;
    var deterClass = function () {
        $rootScope.loaderPos = '';
        switch ($state.current.name) {
            case 'ground.work': {
                $rootScope.loaderPos = 'l20';
                break;
            }
            case 'ground.about': {
                $rootScope.loaderPos = 'l0';
                break;
            }
            case 'ground.contact': {
                $rootScope.loaderPos = 'l60';
                break;
            }
            case 'ground.blog': {
                $rootScope.loaderPos = 'l40';
                break;
            }
            case 'ground.readme': {
                $rootScope.loaderPos = 'l80';
                break;
            }
        }
    }

    $rootScope.$on('$stateChangeSuccess', function () {
        document.body.scrollTop = 0;
        deterClass();
        
    });

    $state.go('ground.about');
});