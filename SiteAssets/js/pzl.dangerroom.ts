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
    var searchQuery = "contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*";

    Pzl.Utilities.getAjaxRequest(String["format"]("{0}/_api/search/query?querytext='{1}'&selectproperties='Title,OriginalPath,PzlLocationOWSTEXT'", _spPageContextInfo.webAbsoluteUrl, searchQuery)).done(function(data) {
        var operations = Pzl.Utilities.transformSearchResultToAngularReadableFormat(data);
        var markers = [];
        operations.forEach((operation) => {
            if (operation.PzlLocationOWSTEXT) {
                var location = angular.fromJson(operation.PzlLocationOWSTEXT);
                markers.push({
                    title: operation.Title,
                    coords: location.coords
                });
            }
        });
    
        $scope.map = {
            markers: markers,
            center: { 
                latitude: 45, 
                longitude: -72 
            }, 
            zoom: 10
        };
        // var latlngbounds = uiGmapGoogleMapApi.LatLngBounds();
        // markers.forEach(function(n){
        //     latlngbounds.extend(n);
        // });
        // $scope.map.setCenter(latlngbounds.getCenter());
        // $scope.map.fitBounds(latlngbounds); 

    });   
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});