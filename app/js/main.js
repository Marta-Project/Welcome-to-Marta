;(function (){
  'use strict';

  angular.module('marta', ['ngRoute', 'ngCookies'])

  //.constant and headers will go here
  // connecting to PARSE for user registration
.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {

      'X-Parse-Application-Id' : 'K7jTulq7a3XXqlt7ErUOe6cbMIArbi3Mo7em6DnL',
      'X-Parse-REST-API-Key' : 'aLrB1N3xxuPQrE3DBEM1zkzXzceZmUQfxMygdaqh',

    }
  }
})


// .constant('MARTA', {
//   URL: 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?',
//   CONFIG: {
//     headers: {

//       'apiKey' : '72f588d5-9412-4a89-8d83-0ef58e91cac1',

//     }
//   }
// })


//marta api key : http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'js/dashboard/dashboard.tpl.html',
      controller: 'Dashboard'
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

    })

    .when('/register', {
      templateUrl: 'js/registration/registration.tpl.html',
      controller: 'Registration'
    })

    .when('/login', {
      templateUrl: 'js/login/login.tpl.html',
      controller: 'Login'
    });

  });


}());