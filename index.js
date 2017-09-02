var app = angular.module('TestAngular', ['ui.router', 'ui.bootstrap']);
// app.config(function($routeProvider, $locationProvider) {
//     $routeProvider.when('/default', {
//         templateUrl: 'testpage.html',
//         controller: 'testpageCtrl'
//     }).when('/reg', {
//         templateUrl: 'app/testreg/testreg.html',
//         controller: 'testregctrl'
//     });

//     $routeProvider.otherwise({
//         templateUrl: 'app/testreg/testreg.html',
//         controller: 'testregctrl'
//     });

//     $locationProvider.html5Mode(true);

// });





app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    var states = [
        { name: 'login', url: '/', templateUrl: 'app/loginpage/login.html', controller: 'loginctrl' },
        { name: 'dashboard', url: '/dashboard', templateUrl: 'app/dashboard/dashboard.html', controller: 'dashboardctrl' }
    ];

    states.forEach(function(item) {
        $stateProvider.state({
            name: item.name,
            url: item.url,
            views: {
                "topbar@": {
                    templateUrl: 'templates/top.html'
                },
                "midB@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller,
                },
                "bottompanel@": {
                    templateUrl: 'templates/bottom.html'
                }
            }
        });
    }, this);









    $locationProvider.html5Mode(true);
});

app.run(function($rootScope) {
    $rootScope.color = "gray";
});