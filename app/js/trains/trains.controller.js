;(function (){

  'use strict';

  angular.module('marta')

  .controller('Trains', ['$scope', '$http', 'HeaderService',

    function ($scope, $http, HeaderService){

HeaderService.headerConfig();

    $scope.northTrains = [];
    $scope.southTrains = [];

  $http
    .get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1')
    .success( function (data) {
      console.log(data);
      $scope.trains = data;
      angular.forEach($scope.trains, function (train){
        if( train.DIRECTION === "N") {
          $scope.northTrains.push(train);
        }
        else if( train.DIRECTION === "S"){
          $scope.southTrains.push(train);
        }

      });
      console.log($scope.northTrainsRed);
      console.log($scope.northTrainsGold);
      console.log($scope.southTrains);
    })
   .error (function (err){
    console.error(err);
   });

   // Refresh Button
    $scope.refresh = function () {
      $scope.northTrains = [];
      $scope.southTrains = [];

        $http
    .get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1')
    .success( function (data) {
      console.log(data);
      $scope.trains = data;
      angular.forEach($scope.trains, function (train){
        if( train.DIRECTION === "N") {
          $scope.northTrains.push(train);
        }
        else if( train.DIRECTION === "S"){
          $scope.southTrains.push(train);
        }
        // else if( train.DIRECTION === "N" && train.LINE === "GOLD") {
        //   $scope.northTrainsGold.push(train);
        // }


      });
      console.log($scope.northTrainsRed);
      console.log($scope.northTrainsGold);
      console.log($scope.southTrains);
    })
   .error (function (err){
    console.error(err);
   });
    };
    }
    ]);

}());
