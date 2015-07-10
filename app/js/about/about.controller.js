;(function (){

  'use strict';

  angular.module('marta')

  .controller('About', ['$scope', '$http',

    function ($scope, $http){


      $scope.toggleModal = function() {
        $scope.dialogShown = !$scope.dialogShown;
       };
      $scope.toggleChrisModal = function() {
        $scope.chrisDialogShown = !$scope.chrisDialogShown;
      }



    }
    ]);

}());
