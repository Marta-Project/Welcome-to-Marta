;(function (){

  'use strict';

  angular.module('marta')

  .controller('Registration', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {

      var Register = function (options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.userName = options.userName;
        this.password = options.password;
        this.vPass = options.vPass;
        this.email = options.email;
        this.age = options.age;
        this.zip = options.zip;
      };


    }




    ]);


}());