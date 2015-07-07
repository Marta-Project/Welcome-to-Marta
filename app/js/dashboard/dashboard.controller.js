;(function (){

  'use strict';

  angular.module('marta')

  .controller('Dashboard', ['$scope', '$http', 'PARSE', '$cookies', '$location',

    function ($scope, $http, PARSE, $cookies, $location ){

      $scope.userName = $cookies.get('username');

      $scope.sesh = $cookies.get('sessionToken');


      $scope.logout = function () {

        var removeSessionToken = function () {$cookies.remove('sessionToken');};
        var removeUserName = function () {$cookies.remove('username');};

        removeSessionToken();
        removeUserName();
        $location.path('/login');



      };


    }

    ]);

}());