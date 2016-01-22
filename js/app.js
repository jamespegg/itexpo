'use strict';

var app = angular.module('app', ['ngRoute', 'app.controllers']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl : 'views/home.html',
        controller : 'HomeController'
    }).
    when('/agenda', {
        templateUrl : 'views/agenda.html',
        controller : 'AgendaController'
    }).
    when('/map', {
        templateUrl : 'views/map.html',
        controller : 'MapController'
    }).
    when('/info', {
        templateUrl : 'views/info.html',
        controller : 'InfoController'
    }).
    otherwise({
        redirectTo: '/'
    });
});

angular.module('app.controllers', ['app']);
