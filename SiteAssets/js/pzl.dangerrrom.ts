/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\..\typings\angularjs\angular.d.ts" />
/// <reference path="pzl.config.ts" />
/// <reference path="pzl.utilities.ts" />

var mapsApp = angular.module("googleMap")
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBFYSkq3JAAzE9gmI13oDqMNF21trD7iCk',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})