/// <reference path="..\..\..\typings\tsd.d.ts" />

 module Controllers {
        export class OperationsController {
            $scope: any;
            $searchService: Services.Search;
            $flickrService: Services.Flickr;
            
            constructor($scope, $searchService, $flickrService) {
                this.$scope = $scope;
                this.$searchService = $searchService;
                this.$flickrService = $flickrService;
                
                this.getOperations();
            }
            
            private getOperations() {
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT' }).then((operations: Array<any>) => {
                    this.$scope.Operations = operations;
                    this.$scope.Operations.forEach((operation) => {
                        if (operation.PzlLocationOWSTEXT) {
                            var location = angular.fromJson(operation.PzlLocationOWSTEXT);
                            operation.Location = {
                                title: operation.Title,
                                coords: location.coords
                            };
                            if (location.coords.latitude && location.coords.longitude) {
                                this.$flickrService.getPicturesForLocation(location.coords.latitude, location.coords.longitude).then((data) => {
                                    operation.LocationImageUrl = data;
                                });
                            }
                        }
                    });
                })
            }
        }
 }