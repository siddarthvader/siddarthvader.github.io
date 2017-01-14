//  we write routes here @9jan17
syd.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('*');
    $stateProvider.state('ground', {
        views: {
            "vmenu": {
                templateUrl: 'app/desktop/views/menu.html',
                controller: 'menuCtrl',
                controllerAs: 'vmenu'
            },
            "vtabs": {
                templateUrl: 'app/desktop/views/tabs.html',
                controller: 'tabsCtrl',
                controllerAs: 'vtabs'
            },
            "vport": {
                templateUrl: 'app/desktop/views/port.html',
                controller: 'portCtrl',
                controllerAs: 'vport'
            },
            "vterminal": {
                templateUrl: 'app/desktop/views/terminal.html',
                controller: 'terminalCtrl',
                controllerAs: 'vterminal'
            }
        }
    }).state('ground.work',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/work.html'
            }
        }
    })
    .state('ground.about',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/about.html'
            }
        }
    })
    .state('ground.contact',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/contact.html',
                controller:'contactCtrl',
                controllerAs:'contact'
            }
        }
    })
    .state('ground.blog',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/blog.html'
            }
        }
    })
    .state('ground.readme',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/readme.html'
            }
        }
    })
     .state('ground.css',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/readme.html'
            }
        }
    })
     .state('ground.httpshooter',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/demo/httpshooter.html'
            }
        }
    })
    .state('ground.cssmedia',{
        views:{
            "content":{
                templateUrl:'app/desktop/views/demo/cssmedia.html'
            }
        }
    })

}]);