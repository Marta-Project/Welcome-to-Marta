;(function (){

  'use strict';

  angular.module('marta')

  .controller('Trains', ['$scope', '$http',

    function ($scope, $http){


      var trainEndpoint = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=72f588d5-9412-4a89-8d83-0ef58e91cac1';


      $.getJSON( trainEndpoint, function( data ) {
        var items = [];
        $.each( data, function( name, item ) {
          items.push( "<li id='" + name + "'>" + item + "</li>" );
        });

        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "#traintest" );
      });



    }
    ]);

}());