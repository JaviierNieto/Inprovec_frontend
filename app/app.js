var app = angular.module('inprovec', ['ngMaterial', 'ui.router', 'ngResource', 'ngMessages']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
});

app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('login_index',{
            url: '/',
            templateUrl: 'template/login/login.html',
            controller: 'login_index'
        })
});
