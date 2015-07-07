;(function (){

  'use strict';

  angular.module('marta')

  .controller('Dashboard', ['$scope', '$http', 'PARSE', '$cookies',

    function ($scope, $http, PARSE, $cookies ){

      $scope.userName = $cookies.get('username');




    }

    ]);

}());