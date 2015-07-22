;(function (){

  'use strict';

  angular.module('marta')

  .controller('Dashboard', ['$scope', '$http', 'PARSE', '$cookies', '$location', 'HeaderService',

    function ($scope, $http, PARSE, $cookies, $location, HeaderService ){

      HeaderService.headerConfig();


      $scope.userName = $cookies.get('username');

      $scope.sesh = $cookies.get('sessionToken');

      $scope.ObjectID = $cookies.get('objectId');

      var sessionT = $scope.sesh;
   // Retrieving the User Object ID

   $scope.ID = {};

   var USERID2 = $cookies.get('username');

   var retrieveID = function () {
    $http.get(PARSE.URL + 'users', PARSE.CONFIG)
    .success( function (data){
      console.log(data);

      $scope.USERID = $cookies.get('objectId');

      // angular.forEach($scope.USERID, function (ID){
      //   if (ID.username === USERID2) {
      //     $scope.ID.push(ID);
      //   }
      //   else if (ID.username !== USERID2 ) {
      //     console.log("did not contain");
      //   }
  console.log($scope.USERID);

      // });
      // console.log($scope.ID);
    });
    // .error (function (err){
    //   console.error(err);
    // });


   };

   //Create an Instance of Retrieve ID

    retrieveID();

    //Filter out the current user

    var currentID = retrieveID;


      //Log Out Current User
      $scope.logout = function () {

        var removeSessionToken = function () {$cookies.remove('sessionToken');};
        var removeUserName = function () {$cookies.remove('username');};
        var removeObjID = function () {$cookies.remove('objectId');};
        removeSessionToken();
        removeUserName();
        removeObjID();
        $location.path('/login');
      };

      // Modal Setup
      $scope.favorite = function () {
        $scope.favoriteLocation = !$scope.favoriteLocation;
      };

      // Array of all stations to choose a favorite from
      $scope.stations = [{'Station' : 'North Springs'},
        {'Station' : 'Sandy Springs'},
        {'Station' : 'Dunwoody'},
        {'Station' : 'Medical Center'},
        {'Station' : 'Buckhead'},
        {'Station' : 'Doraville'},
        {'Station' : 'Chamblee'},
        {'Station' : 'Brookehaven/Oglethorpe'},
        {'Station' : 'Lenox'},
        {'Station' : 'Lindbergh Center'},
        {'Station' : 'Arts Center'},
        {'Station' : 'Midtown'},
        {'Station' : 'North Avenue'},
        {'Station' : 'Civic Center'},
        {'Station' : 'Peachtree Center'},
        {'Station' : 'Five Points'},
        {'Station' : 'Garnett'},
        {'Station' : 'West End'},
        {'Station' : 'Oakland City'},
        {'Station' : 'Lakewood/Ft. McPherson'},
        {'Station' : 'East Point'},
        {'Station' : 'College Park'},
        {'Station' : 'Airport'}];





        //Test for Posting new column to Users

        $scope.updateUser = function(data) {
          $http.put(PARSE.URL + 'users/' + $scope.ObjectID, data, PARSE.CONFIG)
          .success( function (data){
            console.log(data);
          });
        };

    }

    ]);

}());