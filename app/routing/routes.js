//  we write routes here @9jan17
syd.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    console.log('unreal wow');
    $locationProvider.html5Mode(true).hashPrefix('*');
    $stateProvider.state('first', {
        views: {
            "vmenu": {
                templateUrl: 'app/desktop/views/first/menu.html',
                controller: 'menuCtrl',
                controllerAs: 'vmenu'
            },
            "vtabs": {
                templateUrl: 'app/desktop/views/first/tabs.html',
                controller: 'tabsCtrl',
                controllerAs: 'vtabs'
            },
            "vport": {
                templateUrl: 'app/desktop/views/first/port.html',
                controller: 'portCtrl',
                controllerAs: 'vport'
            },
            "vterminal": {
                templateUrl: 'app/desktop/views/first/terminal.html',
                controller: 'terminalCtrl',
                controllerAs: 'vterminal'
            }
        }
    })

}]);