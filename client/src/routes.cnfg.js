(function() {
    'use strict';

    const angular = require('angular');

    routingConfig.$inject = [
        '$routeProvider',
        '$locationProvider',
    ];

    function routingConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/projects', {
                templateUrl: '/projects/projects.tmpl.html',
            })
            .when('/contact', {
                templateUrl: '/contact/contact.tmpl.html',
            })
            .otherwise({
                redirectTo: '/',
            });

        $locationProvider.html5Mode(true);
    }

    module.exports = routingConfig;

}());
