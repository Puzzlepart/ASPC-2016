/// <reference path="..\..\..\typings\tsd.d.ts" />

module Controllers {
    export class OperationSiteController {
        $scope: any;

        constructor($scope, $graphService : Services.GraphService) {
            this.$scope = $scope;
            this.$scope.map = {
                markers: [],
                selectedMarker: null,
                center: {
                    latitude: 59.9756579,
                    longitude: 10.6593764
                },
                zoom: 3
            };
            $graphService.getTasks().then(tasks => {
                console.log(tasks);
            })
        }
    
    }
}