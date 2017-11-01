syd.controller('workCtrl', function ($state, $scope, $timeout) {
    // console.info('unreal fast');
    $scope.$state = $state;

    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {

            $scope.appsDev = [{
                    title: 'Portfolio',
                    duration: 'Aug-2017 - Sep 2017',
                    past: true,
                    company: 'Freelancing',
                    url: 'http://amanegi.com/'
                },
                {
                    title: 'Trading Application',
                    duration: 'July-2017',
                    past: false,
                    company: 'Freelancing',
                    url: 'https://damp-oasis-64949.herokuapp.com/'
                },
                {
                    title: 'Acadly App',
                    duration: 'Feb-2016 - Feb 2017',
                    past: true,
                    company: 'Acetone Designs Pvt Ltd',
                    url: 'https://app.acadly.com/'
                },
                {
                    title: 'Acadly Website',
                    duration: 'Feb-2016 - Feb 2016',
                    past: true,
                    company: 'Acetone Designs Pvt Ltd, India',
                    url: 'https://www.acadly.com/'
                }
            ];


            $scope.openSource = [{
                    title: 'Angular Httpshooter',
                    duration: 'Jan-2017 - now',
                    past: false,
                    company: 'Self authored',
                    url: 'https://www.npmjs.com/package/angular-httpshooter'
                },
                {
                    title: 'CSS Media All',
                    duration: 'Jan-2017 - now',
                    past: false,
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
            }];

            $scope.freeelancing = [{
                    title: 'Fees management system',
                    duration: 'May 2014',
                    company: 'Self Authored',
                    past: true,
                    url: 'https://github.com/siddarthvader/sms/tree/master'
                },
                {
                    title: 'College Sports Fest Site',
                    duration: 'Jan 2013',
                    company: 'Self Authored',
                    past: true,
                    url: 'https://github.com/siddarthvader/mst/tree/master'
                }
            ];


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