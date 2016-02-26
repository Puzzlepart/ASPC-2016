/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />


EnsureScriptFunc('adal-angular.min.js', null, function() {
    EnsureScriptFunc('angular-google-maps.min.js', null, function() {
        var app = angular.module("app", ['uiGmapgoogle-maps', 'AdalAngular']).config(
            ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
                GoogleMapApiProviders.configure({
                    china: true
                });
            }])
            .config(["$httpProvider", ($httpProvider) => {
                $httpProvider.defaults.headers.common["Accept"] = "application/json; odata=verbose";
            }])
            .controller("operationSiteController", Controllers.OperationSiteController)
        angular.bootstrap(document.getElementById('homeApp'), ['app']);
    });
});