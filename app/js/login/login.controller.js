;(function (){

  'use strict';

  angular.module('marta')

  .controller('Login', ['$scope', '$http', 'PARSE', '$cookies', '$location',

    function ($scope, $http, PARSE, $cookies, $location){
//Takes the user info to create a new object
      var user = function (options) {
        this.userName = options.userName;
        this.password = options.password;
      };
//sends the login request to Parse

      $scope.login = function (user) {
        $http.get(PARSE.URL + 'login?username=' + user.userName + '&password=' + user.password, PARSE.CONFIG).success ( function (ll){

          $cookies.put('sessionToken', ll.sessionToken);
          $cookies.put('username', ll.username);
          $cookies.put('objectId', ll.objectId);
          console.log(ll.objectId);
//redirects to homepage on success
          $location.path('/');
//defines user as a object
          $scope.user = {};

        });
      };



    }
    ]);

}());