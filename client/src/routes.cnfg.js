(function() {
    'use strict';

    const angular = require('angular');

    routingConfig.$inject = [
        '$routeProvider',
        '$locationProvider',
    ];

    function routingConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/t1', {
                templateUrl: '/test1.html',
            })
            .when('/t2', {
                templateUrl: '/test2.html',
            })
            .otherwise({
                redirectTo: '/',
            });
    }

    module.exports = routingConfig;

}());
