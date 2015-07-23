;(function (){
  'use strict';

  angular.module('marta')

  .controller('TrainTable', ['$scope', '$http',

    function ($scope, $http){
      // have scopes set to open array
      $scope.trainNorth = [];
      $scope.trainSouth = [];
      //Perform AJAX
      $http
        .get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1')
        .success( function (data){
          console.log(data);
          //Upon successful request, the data retrieved to be set equal to a new scope
          $scope.DBtrains = data;
          angular.forEach($scope.DBtrains, function (train){
            if( train.DIRECTION === "N") {
              $scope.trainNorth.push(train);
            }
            else if( train.DIRECTION === "S"){
              $scope.trainSouth.push(train);
            }
          });
        })
        .error (function (err){
            console.error(err);
          });

        //Do nothing under this line
      }
      ]);
}());