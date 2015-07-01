;(function (){
  'use strict';

  angular.module('marta', ['ngRoute'])

  //.constant and headers will go here

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: '/dashboard/dashboard.tpl.html',
      controller: 'DashBoard'
    })

    .when('/about', {
      templateUrl: '/about/about.tpl.html',
      controller: 'About'
    })

    .when('/contact', {
      templateUrl: '/contact/contact.tpl.html',
      controller: 'Contact'
    })

    .when('/trains', {
      templateUrl: '/trains/trains.tpl.html',
      controller:   'Trains'
     });
    
  });


}());