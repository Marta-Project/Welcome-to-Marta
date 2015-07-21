;(function (){

  'use strict';

  angular.module('marta')

  .controller('Registration', ['$scope', '$http', 'PARSE', '$location','$cookies',

    function ($scope, $http, PARSE, $location, $cookies) {

      var Register = function (options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.userName = options.userName;
        this.password = options.password;
        this.email = options.email;
        this.age = options.age;
        this.zip = options.zip;
      };

    $scope.registration = function (data) {
      $http.post(PARSE.URL + 'users', data, PARSE.CONFIG)
      .success( function (data){
        console.log(data);

        $cookies.put('sessionToken', data.sessionToken);
        $cookies.put('username', data.username);
        $cookies.put('objectID', data.objectID);

        $location.path('/login');

        $scope.registration = {};
      });
    };

    }




    ]);


}());