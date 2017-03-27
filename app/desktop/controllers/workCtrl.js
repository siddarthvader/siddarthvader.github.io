syd.controller('workCtrl', function ($state, $scope, $timeout) {
    // console.info('unreal fast');
    $scope.$state = $state;

    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {

            $scope.appsDev = [
                {
                    title: 'Acadly App',
                    duration: 'Feb-2017 - now',
                    past: false,
                    company: 'Acetone Designs Pvt Ltd',
                    url: 'https://app.acadly.com/'
                },
                {
                    title: 'Acadly Website',
                    duration: 'Feb-2017 - now',
                    past: true,
                    company: 'Acetone Designs Pvt Ltd, India',
                    url: 'https://www.acadly.com/'
                }
            ];


            $scope.openSource = [
                {
                    title: 'Angular Httpshooter',
                    duration: 'Jan-2017 - now',
                    past: false,
                    company: 'Self authored',
                    url: 'https://www.npmjs.com/package/angular-httpshooter'
                },
                {
                    title: 'CSS Media All',
                    duration: 'Jan-2017 - now',
                    past: true,
                    company: 'Self authored',
                    url: 'https://www.npmjs.com/package/css-media-all'
                }
            ];

            $scope.gameDev = [{
                title: 'Javscript BallGame',
                duration: 'July-2014 - now',
                past: false,
                company: 'Self authored',
                url: 'https://siddarthvader.github.io/ballgame/'
            }]

            setTimeout(function () {
                var i = 0;
                Array.prototype.filter.call(document.querySelectorAll(".load.zw"), function (el) {
                    setTimeout(function () {
                        el.classList.remove("zw");
                    }, (i++) * 300);
                });
            }, 1000);

        });

    });

})