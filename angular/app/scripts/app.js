'use strict';

angular.module('angularApp', ['btford.socket-io'])
  .config(function ($routeProvider, socketProvider) {
    var socket = io.connect('http://localhost:3000');
    socketProvider.ioSocket(socket);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/example', {
         templateUrl: 'views/example.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
