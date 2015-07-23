;(function (){

  'use strict';

  angular.module('marta')

  .controller('About', ['$scope', '$http','HeaderService',

    function ($scope, $http, HeaderService){

      HeaderService.headerConfig();


      $scope.toggleModal = function() {
        $scope.dialogShown = !$scope.dialogShown;
       };
      $scope.toggleChrisModal = function() {
        $scope.chrisDialogShown = !$scope.chrisDialogShown;
      };



    }
    ]);

}());
