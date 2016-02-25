/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\..\typings\angularjs\angular.d.ts" />
/// <reference path="pzl.config.ts" />
/// <reference path="pzl.utilities.ts" />

var mapsApp = angular.module('danger-room-app', ['uiGmapgoogle-maps'])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBFYSkq3JAAzE9gmI13oDqMNF21trD7iCk',
        libraries: 'weather,geometry,visualization'
    });
})
.controller("operationOverview", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    $scope.map = {
        markers: [
            {
                coords: {
                    latitude: 12.3349940452867,
                    longitude:-71.0353168884369
                }
            },
            {
                coords: {
                    latitude: 62.3349940452867,
                    longitude:-41.0353168884369
                }
            },
            {
                coords: {
                    latitude: 72.3349940452867,
                    longitude:-11.0353168884369
                }
            }
        ],
        center: { 
            latitude: 45, 
            longitude: -73 
        }, 
        zoom: 10
    }
    
    
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});