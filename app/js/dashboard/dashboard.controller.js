;(function (){

  'use strict';

  angular.module('marta')

  .controller('Dashboard', ['$scope', '$http', 'PARSE', '$cookies', '$location',

    function ($scope, $http, PARSE, $cookies, $location ){

      $scope.userName = $cookies.get('username');

      $scope.sesh = $cookies.get('sessionToken');


      $scope.logout = function () {

        var removeSessionToken = function () {$cookies.remove('sessionToken');};
        var removeUserName = function () {$cookies.remove('username');};

        removeSessionToken();
        removeUserName();
        $location.path('/login');



      };

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





    }

    ]);

}());