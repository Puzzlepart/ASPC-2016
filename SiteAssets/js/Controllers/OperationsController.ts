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

            this.$scope.Operations = [];
            this.getOperations();

            this.$scope.map = {
                markers: [],
                selectedMarker: null,
                center: {
                    latitude: 59.9756579,
                    longitude: 10.6593764
                },
                zoom: 3,
                styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
            };
            this.attachMapEvents();
            this.getMarkers();
            
            $scope.createNewOperation = () => {
                window.location.href = 'New-room.aspx'
            }
            $scope.selectOperation = (op) => {
                if (op.coords) {
                    this.$scope.map.center = op.coords;
                    this.$scope.map.zoom = 6;
                    this.$scope.map.selectedMarker = op;
                }
            }
            
            this.getStats();
        }
        
        getStats() {
             this.$scope.basicStats = [
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Cat_in_a_tree.jpg',
                    name: "Cats saved from trees",
                    count: 12
                },
                {
                    image: 'https://farm1.staticflickr.com/76/157961324_add27e337c_o_d.jpg',
                    name: "Fires put out",
                    count: 8
                },
                {
                    image: 'http://everydaylife.globalpost.com/DM-Resize/photos.demandstudios.com/getty/article/117/20/78155249.jpg?w=600&h=600&keep_ratio=1&webp=1',
                    name: "Civillians saved",
                    count: 130
                }
            ]
        }
        
        private getOperations() {
            this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT' }).then((operations: Array<any>) => {
                this.$scope.Operations = [];
                operations.forEach((operation, index) => {
                    var location = operation.PzlLocationOWSTEXT ? angular.fromJson(operation.PzlLocationOWSTEXT) : null;
                    if(!location) return;
                    this.$scope.Operations.push(angular.extend(operation, location,  { LocationImageUrl: "../SiteAssets/pzl/img/location.jpg" }));
                    if (location.coords.latitude && location.coords.longitude) {
                        this.$flickrService.getPicturesForLocation(location.coords.latitude, location.coords.longitude).then((data) => {
                            if (data.photos && data.photos.photo.length > 0) {
                                var photo = data.photos.photo[0];
                                var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                if (this.$scope.Operations[index]) {
                                    this.$scope.Operations[index].LocationImageUrl = url;
                                }
                            }
                        });
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
                    if(!coords) return;
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