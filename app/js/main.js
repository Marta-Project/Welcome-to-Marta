;(function (){
  'use strict';

  angular.module('marta', ['ngRoute'])

  //.constant and headers will go here

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'js/dashboard/dashboard.tpl.html',
      controller: 'DashBoard'
    })

    .when('/about', {
      templateUrl: 'js/about/about.tpl.html',
      controller: 'About'
    })

    .when('/contact', {
      templateUrl: 'js/contact/contact.tpl.html',
      controller: 'Contact'
    })

    .when('/trains', {
      templateUrl: 'js/trains/trains.tpl.html',
      controller:   'Trains'
     })

    .when('/buses', {
      templateUrl: 'js/buses/bus.tpl.html',
      controller: 'Buses'

    });
    
  });


}());