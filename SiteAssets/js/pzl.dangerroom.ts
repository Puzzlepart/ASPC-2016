/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />

EnsureScriptFunc('angular-google-maps.min.js', null, function() {
    var app = angular.module("app", ['uiGmapgoogle-maps']).config(
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
        .service("$flickrService", Services.Flickr)
        .service("$siteService", Services.SiteService)
        .service("$marvelService", Services.Marvel)
        .controller("heroesController", Controllers.HeroesController)
        .controller("opsController", Controllers.OperationsController)
        .controller("heroDocumentsController",Controllers.HeroDocumentsController);
        
    angular.bootstrap(document.getElementById('homeApp'), ['app']);
});