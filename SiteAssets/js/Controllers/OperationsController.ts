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
                    this.$scope.Operations.forEach((operation, index) => {
                        this.$scope.Operations[index].LocationImageUrl = "../SiteAssets/pzl/img/location.jpg";
                        if (operation.PzlLocationOWSTEXT) {
                            var location = angular.fromJson(operation.PzlLocationOWSTEXT);
                            operation.Location = {
                                title: operation.Title,
                                coords: location.coords
                            };
                            if (location.coords.latitude && location.coords.longitude) {
                                this.$flickrService.getPicturesForLocation(location.coords.latitude, location.coords.longitude).then((data) => {
                                    if (data.photos && data.photos.photo.length > 0)
                                    {
                                        var photo = data.photos.photo[0];
                                        var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                        this.$scope.Operations[index].LocationImageUrl = url;
                                        this.$scope.Operations[index].ImageSet = true;
                                        
                                    }
                                });
                            }
                        }
                    });
                })
            }
        }
 }