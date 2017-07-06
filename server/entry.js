(function() {
    'use strict';

    require('dotenv').config();

    var express = require('express');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    var compression = require('compression');

    var path = require('path');
    var http = require('http');

    var siteRouter = require('./routers/site.js');

    var xlv = express();

    xlv
        .use(compression())
        .use(morgan('dev'))
        .use(bodyParser.urlencoded({
            extended: true,
        }))
        .use('/', siteRouter);

    var port = process.env.port || 3863 // "&?"!

    xlv.set('port', port);
    var server = http.createServer(xlv);
    server.listen(port);

}());
