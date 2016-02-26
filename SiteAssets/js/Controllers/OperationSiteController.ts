/// <reference path="..\..\..\typings\tsd.d.ts" />

module Controllers {
    export class OperationSiteController {
        $scope: any;

        constructor($scope, $graphService : Services.GraphService, $siteService: Services.SiteService) {
            this.$scope = $scope;
            this.$scope.map = {
                markers: [],
                center: {
                    latitude: 59.9756579,
                    longitude: 10.6593764
                },
                zoom: 8
            };
            $siteService.getSiteProperties(_spPageContextInfo.webAbsoluteUrl).then((properties:any) => {
               var loc = properties.PzlLocation ? angular.fromJson(properties.PzlLocation) : null;
               this.$scope.map.center = loc.coords;
            });
        }
    
    }
}