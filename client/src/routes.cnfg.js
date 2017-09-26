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
                controller: 'TabCtrl',
                controllerAs: 'tabCtrl',
                activeTab: 'about'
            })
            .when('/projects', {
                templateUrl: '/projects/projects.tmpl.html',
                controller: 'TabCtrl',
                controllerAs: 'tabCtrl',
                activeTab: 'projects'
            })
            .when('/contact', {
                templateUrl: '/contact/contact.tmpl.html',
                controller: 'TabCtrl',
                controllerAs: 'tabCtrl',
                activeTab: 'contact'
            })
            .otherwise({
                redirectTo: '/about',
                controller: 'TabCtrl',
                controllerAs: 'tabCtrl',
                activeTab: 'about'
            });

        $locationProvider.html5Mode(true);
    }

    module.exports = routingConfig;

}());
