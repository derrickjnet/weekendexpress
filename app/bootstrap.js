'use strict';

(function(window) {

    require.config({
        baseUrl: "app",
        paths: {
            'jasmine_f': '../libs/jasmine/lib/jasmine-core',
            'specs': '../test/specs',
            'angular-mocks': '../libs/angular-mocks/angular-mocks',
            'mocks': '../test/mocks',
            '$Libs': '../libs',
            '$App': '../libs/apperyio',
            '$Screens': 'pages',
            '$Modals': 'modals',
            '$Services': 'services',
            "backButton": "services/backButton",
            "navigateTo": "services/navigateTo",
            "AngularTranslate": "services/AngularTranslate",
            "text": "../libs/text",
            "require": "../libs/requirejs/require",
            "angular": "../libs/angular/angular.min",
            "angular-touch": "../libs/angular-touch/angular-touch.min",
            "angular-simple-logger": "../libs/angular-simple-logger/angular-simple-logger.min",
            "angular-route": "../libs/angular-route/angular-route.min",
            "angular-animate": "../libs/angular-animate/angular-animate.min",
            "ui-bootstrap": "../libs/angular-bootstrap/ui-bootstrap-tpls.min",
            "lodash": "../libs/lodash/dist/lodash.min",
            "gmaps": "../libs/angular-google-maps/angular-google-maps.min",
            "angular-translate": "../libs/angular-translate/angular-translate.min",
            "Apperyio": "../libs/apperyio/Apperyio",
            "q": "../libs/ms_sdk_bundle/q/q",
            "ms-client-sdk": "../libs/ms_sdk_bundle/client-sdk",
            "cordova": "../cordova",
            "x2js": "../libs/x2js/xml2json",
            "$App/crouterconfig": "../libs/apperyio/crouterconfig",
            "Disrupt_Yelp_businesses_get": "services/Disrupt_Yelp_businesses_get",
            "Disrupt_Yelp_bookrides_get": "services/Disrupt_Yelp_bookrides_get",
            '$Screen1': 'pages/Screen1'
        },
        waitSeconds: 100,
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-touch": {

                deps: ["angular"]
            },
            "angular-simple-logger": {

                deps: ["angular"]
            },
            "angular-route": {

                deps: ["angular"]
            },
            "angular-animate": {

                deps: ["angular"]
            },
            "ui-bootstrap": {

                deps: ["angular"]
            },
            "lodash": {
                exports: "_"
            },
            "gmaps": {

                deps: ["angular"]
            },
            "angular-translate": {

                deps: ["angular"]
            },
            "x2js": {
                exports: "X2JS"
            },

            'jasmine_f/boot': {
                deps: ['jasmine_f/jasmine-html']
            },
            'jasmine_f/jasmine-html': {
                deps: ['jasmine_f/jasmine']
            },
            'angular-mocks': {
                deps: ['angular', 'jasmine_f/boot']
            }
        }
    });

    define('angular', [], function() {
        return window.angular;
    });

    window.__APPLICATION_NAME = "AppModule_CareUpshot";

    if (window.location.href.indexOf('tests.html') > -1) {
        require(["require", "angular", "app", '../test/tests_asset'], function() {});
    } else {
        require(["require", "angular", "app", "ui-bootstrap"], function(require, angular) {
            // Run APP
            angular.bootstrap(document.documentElement, [window.__APPLICATION_NAME]);
        });
    }

})(this);