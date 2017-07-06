(function() {
    'use strict';

    const angular = require('angular');

    angular
        .module('andHow')
        .factory('testSrvc', testSrvc);

    testSrvc.$inject = [
        '$http',
    ];

    function testSrvc($http) {
        var getString = function() {
            return 'I\'m deep within Angular.';
        };

        return {
            getString: getString,
        };
    }

}());
