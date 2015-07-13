;(function (){

  'use strict';

  angular.module('marta')

  .controller('Buses', ['$scope', '$http',

    function ($scope, $http){

    $http.get('https://jsonp.afeld.me/?url=http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus')


}
var busEndpoint = 'http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus';


      $.getJSON( busEndpoint, function( data ) {
        var items = [];
        $.each( data, function( name, item ) {
          items.push( "<li id='" + name + "'>" + item + "</li>" );
        });

        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "#traintest" );
      });



    ]);

}());
