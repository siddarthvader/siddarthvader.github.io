syd.controller('aboutCtrl', function ($state, $scope, $timeout) {
    // console.info('unreal fast');
    $scope.$state = $state;

    console.log('ods');

    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            $scope.skills = [
                {
                    name: 'HTML',
                    exp: moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') * 10 / 6 : 100
                },
                {
                    name: 'CSS',
                    exp: moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('07-01-2012', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
                {
                    name: 'Javscript',
                    exp: moment().diff(moment('06-01-2013', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('06-01-2013', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
                {
                    name: 'Angular',
                    exp: moment().diff(moment('01-01-2016', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('01-01-2016', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
                {
                    name: 'JQuery',
                    exp: moment().diff(moment('07-06-2013', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('06-06-2013', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
                {
                    name: 'PHP',
                    exp: moment('10-06-2014', 'DD-MM-YYYY').diff(moment('06-01-2013', 'DD-MM-YYYY'), 'months') <= 60 ? moment('10-06-2014', 'DD-MM-YYYY').diff(moment('01-06-2012', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
                {
                    name: 'IONIC',
                    exp: moment().diff(moment('10-11-2016', 'DD-MM-YYYY'), 'months') <= 60 ? moment().diff(moment('10-11-2016', 'DD-MM-YYYY'), 'months') * 1.66 : 100
                },
            ];

            console.log($scope.skills);

            $scope.pastJobs = [
                {
                    title: 'Web Developer/Freelancer',
                    duration: 'Feb-2017 - now',
                    past: false,
                    company: 'Freelancer/Self Employed'
                },
                {
                    title: 'Front-End Developer',
                    duration: 'Feb-2016 - Feb 2017',
                    past: true,
                    company: 'Acetone Designs Pvt Ltd, India'
                },
                {
                    title: 'User Interface Developer',
                    duration: 'July-2014 - Feb 2016',
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