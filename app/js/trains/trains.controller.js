;(function (){

  'use strict';

  angular.module('marta')

  .controller('Trains', ['$scope', '$http',

    function ($scope, $http){



$http.get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1').success( function (data){
        console.log(data);
        $scope.trains = data;

      })
     .error (function (err){
      console.error(err);
     });


    }
    ]);

}());