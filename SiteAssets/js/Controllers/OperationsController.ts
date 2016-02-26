/// <reference path="..\..\..\typings\tsd.d.ts" />

 module Controllers {
        export class OperationsController {
            $scope: any;
            $searchService: Services.Search;
            $siteService: Services.SiteService;
            $flickrService: Services.Flickr;
            
            constructor($scope, $searchService, $siteService) {
                this.$scope = $scope;
                this.$searchService = $searchService;
                this.$siteService = $siteService;
                
                this.getOperations();
            }
            
            private getOperations() {
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT' }).then((operations: Array<any>) => {
                    this.$scope.Operations = operations;
                    operations.forEach((operation) => {
                        if (operation.PzlLocationOWSTEXT) {
                            var location = angular.fromJson(operation.PzlLocationOWSTEXT);
                            operation.Location = {
                                title: operation.Title,
                                coords: location.coords
                            };
                            this.$flickrService.getPicturesForLocation(location.coords.latitude, location.coords.longtitude).then((data) => {
                                operation.LocationImageUrl = data;
                            });
                        }
                    });
                })
            }
        }
 }