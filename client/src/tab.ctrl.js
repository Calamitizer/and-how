(function() {
    'use strict';

    const angular = require('angular');

    angular
        .module('andHow')
        .controller('TabCtrl', TabCtrl);

    TabCtrl.$inject = [
        '$route',
    ];

    function TabCtrl($route) {
        var tabCtrl = this;
        tabCtrl.$route = $route;
        tabCtrl.testVar = 'foo';
    }
}());
