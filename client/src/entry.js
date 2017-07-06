(function() {
    'use strict';

    const angular = require('angular');
    const ngRoute = require('angular-route');

    const routesConfig = require('./routes.cnfg.js');

    angular
        .module('andHow', [
            ngRoute,
        ])
        .config(routesConfig);

    require('./test.ctrl.js');
    require('./test.srvc.js');


}());
