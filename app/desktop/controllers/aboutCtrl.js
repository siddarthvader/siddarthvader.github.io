syd.controller('aboutCtrl', function ($state, $scope, $timeout) {
    // console.info('unreal fast');
    $scope.$state = $state;

    console.log('ods');

    $scope.$on('$viewContentLoaded', function () {

        $timeout(function () {
            $scope.skills = [{
                    name: 'HTML',
                    exp: moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'CSS',
                    exp: moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'Javscript',
                    exp: moment().diff(moment('06-01-2013', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('06-01-2013', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'Angular',
                    exp: moment().diff(moment('01-01-2016', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('01-01-2016', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'Mithril',
                    exp: moment().diff(moment('10-11-2016', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('10-05-2017', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'NodeJS',
                    exp: moment().diff(moment('03-03-2016', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('03-03-2016', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'PHP',
                    exp: moment().diff(moment('06-05-2013', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('01-06-2012', 'DD-MM-YYYY'), 'months')*.83  : 100
                },
                {
                    name: 'MYSQL',
                    exp: moment().diff(moment('05-05-2012', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('05-05-2012', 'DD-MM-YYYY'), 'months')*.83: 100
                },
                {
                    name: 'MongoDB',
                    exp: moment().diff(moment('05-05-2017', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('05-05-2017', 'DD-MM-YYYY'), 'months')*.83 : 100
                },
                {
                    name: 'ReactJS',
                    exp: moment().diff(moment('05-12-2017', 'DD-MM-YYYY'), 'months') <= 120 ? moment().diff(moment('05-12-2017', 'DD-MM-YYYY'), 'months')*.83 : 100
                }
            ];

            console.log($scope.skills);

            $scope.pastJobs = [{
                    title: 'Web Developer/Freelancer',
                    duration: 'Feb-17 - now',
                    past: false,
                    company: 'Freelancer/Self Employed'
                },
                {
                    title: 'Front-End Developer',
                    duration: 'Feb-16 - Feb 17',
                    past: true,
                    company: 'Acetone Designs Pvt Ltd, India'
                },
                {
                    title: 'User Interface Developer',
                    duration: 'July-14 - Feb 16',
                    past: true,
                    company: 'Nucleus Software Pvt Ltd, India'
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