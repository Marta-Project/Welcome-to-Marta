;(function (){
  'use strict';

  angular.module('marta')

  .service('HeaderService', [ '$location', 'PARSE', '$cookies',

    function ($location, PARSE, $cookies) {

      this.headerConfig = function () {
        console.log('It is working');

        var newSession = $cookies.get('sessionToken');

        if (newSession) {
          PARSE.CONFIG.headers['X-Parse-Session-Token'] = newSession;
        }
        else {
          $location.path('/login');
          console.log('This is definitely working');
        }


      };


    }

    ]);
}());