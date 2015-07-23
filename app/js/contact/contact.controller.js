;(function (){

  'use strict';

  angular.module('marta')

  .controller('Contact', ['$scope', '$http', 'HeaderService',

    function ($scope, $http, HeaderService){

      HeaderService.headerConfig();





    }
    ]);

}());