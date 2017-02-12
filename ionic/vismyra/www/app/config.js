vapp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    console.debug('booted');
    $stateProvider.state('home', {
        //    templateUrl:'app/templates/header.html',
        views: {
            'header': {
                templateUrl: 'app/templates/header.html',
                controller: 'headerCtrl',
                controllerAs: 'header'
            },
            'content':{
                templateUrl:'app/templates/jumbo.html',
                controller:'jumboCtrl',
                controllerAs:'jumbo'
            },
            'footer':{
                templateUrl:'app/templates/footer.html',
                controller:'footerCtrl',
                controllerAs:'footer'
            },
            'side-menu':{
                templateUrl:'app/templates/side-menu.html',
                controller:'sideMenuCtrl',
                controllerAs:'sideMenu'    
            }
        }
    }).state('product', {
        //    templateUrl:'app/templates/header.html',
        views: {
            'header': {
                templateUrl: 'app/templates/header.html',
                controller: 'headerCtrl',
                controllerAs: 'header'
            },
            'content':{
                templateUrl:'app/templates/product.html',
                controller:'productCtrl',
                controllerAs:'product'
            },
            'footer':{
                templateUrl:'app/templates/footer.html',
                controller:'footerCtrl',
                controllerAs:'footer'
            },
            'side-menu':{
                templateUrl:'app/templates/side-menu.html',
                controller:'sideMenuCtrl',
                controllerAs:'sideMenu'    
            }
        }
    });

}]);
