/// <reference path="..\..\..\typings\tsd.d.ts" />
/// <reference path="..\Services\services.d.ts" />

module Controllers {
    export class StatisticsController {
        $scope: any;
        $searchService: Services.Search;

        constructor($scope, $searchService) {
            this.$scope = $scope;
            this.$searchService = $searchService;

           
        }

        private getData() {
            this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,' }).then((data: Array<any>) => {

            })
        }
    }
}