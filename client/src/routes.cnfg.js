(function() {
    'use strict';

    const angular = require('angular');

    routingConfig.$inject = [
        '$routeProvider',
        '$locationProvider',
    ];

    function routingConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: '/about/about.tmpl.html',
            })
            .when('/projects', {
                templateUrl: '/projects/projects.tmpl.html',
            })
            .when('/contact', {
                templateUrl: '/contact/contact.tmpl.html',
            })
            .otherwise({
                redirectTo: '/about',
            });

        $locationProvider.html5Mode(true);
    }

    module.exports = routingConfig;

}());
