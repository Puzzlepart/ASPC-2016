/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />

EnsureScriptFunc("ng-google-chart.min.js", null, () => {
    EnsureScriptFunc('angular-google-maps.min.js', null, function() {
        var app = angular.module("app", ['uiGmapgoogle-maps', 'googlechart']).config(
            ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
                GoogleMapApiProviders.configure({
                    china: true
                });
            }])
            .config(["$httpProvider", ($httpProvider) => {
                $httpProvider.defaults.headers.common["Accept"] = "application/json; odata=verbose";
            }])
            .service("$searchService", Services.Search)
            .service("$siteService", Services.SiteService)
            .controller("mapController", Controllers.MapController)
            .controller("statisticsController", Controllers.StatisticsController);
        angular.bootstrap(document.getElementById('homeApp'), ['app']);
    });
});