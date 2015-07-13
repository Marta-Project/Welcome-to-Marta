;(function (){

'use strict';

  angular.module('marta')

  .controller('Buses', ['$scope', '$http',

    function($scope, $http){

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

          });
    }

    ]);



}());
