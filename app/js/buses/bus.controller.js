;(function (){

'use strict';

  angular.module('marta')

  .controller('Buses', ['$scope', '$http', 'HeaderService',

    function ($scope, $http, HeaderService){

       HeaderService.headerConfig();

        $scope.northBus = [];
        $scope.southBus = [];

        $http
          .get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus')
          .success( function (data){
            console.log(data);
            $scope.buses = data;
            angular.forEach($scope.buses, function(bus){
              if( bus.DIRECTION === "Northbound") {
                $scope.northBus.push(bus);
              }
              else if ( bus.DIRECTION === "Southbound"){
                $scope.southBus.push(bus);
              }
            });
            console.log($scope.northBus);
            console.log($scope.southBus);

          })
         .error (function (err){
         console.error(err);
   });

   // Refresh Button
    $scope.refresh = function () {
      //Clear the array using the Pop method?
      $scope.northBus = [];
      $scope.southBus = [];

        $http
    .get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus')
    .success( function (data) {
      console.log(data);
      $scope.buses = data;
      angular.forEach($scope.buses, function (bus){
        if( bus.DIRECTION === "N") {
          $scope.northBus.push(bus);
        }
        else if( bus.DIRECTION === "S"){
          $scope.southBus.push(bus);
        }
        // else if( train.DIRECTION === "N" && train.LINE === "GOLD") {
        //   $scope.northTrainsGold.push(train);
        // }


      });
      console.log($scope.northBus);
      console.log($scope.southBus);
    })
   .error (function (err){
    console.error(err);
   });
    };
    }
    ]);






}());
