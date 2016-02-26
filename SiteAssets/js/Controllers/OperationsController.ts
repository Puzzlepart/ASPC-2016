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
            
            this.$scope.map = {
                    markers: [],
                    selectedMarker: null,
                    center: {
                        latitude: 59.9756579,
                        longitude: 10.6593764
                    },
                    zoom: 3
                };
                this.attachMapEvents();
                this.getMarkers();
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
                                if (data.photos && data.photos.photo.length > 0) {
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

        private attachMapEvents() {
            this.$scope.map.markerEvents = {
                click: (map, eventName, marker, args) => {
                    this.$scope.$apply(() => {
                        this.$scope.map.selectedMarker = marker;
                    });
                }
            };
        }
        private getMarkers() {
            var $search = this.$searchService;
            $search.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT,PzlHeroesOWSUSER,PzlVillainOWSUSER' }).then((operations: Array<any>) => {
                operations.forEach((operation) => {
                    var coords = operation.PzlLocationOWSTEXT ? angular.fromJson(operation.PzlLocationOWSTEXT) : null;
                    this.$scope.map.markers.push(angular.extend(operation, {
                        id: Math.floor((Math.random() * 1000)),
                        Heroes: $search.parseOWSUSER(operation.PzlHeroesOWSUSER),
                        Villain: $search.parseOWSUSER(operation.PzlVillainOWSUSER)
                    }, coords))
                });
            })
        }
    }
}