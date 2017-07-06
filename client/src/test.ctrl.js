(function() {
    'use strict';

    const angular = require('angular');

    angular
        .module('andHow')
        .controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = [
        '$scope',
    ];

    function TestCtrl($scope) {
        var testCtrl = this;
    }
}());
