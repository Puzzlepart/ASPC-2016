/// <reference path="..\..\..\typings\tsd.d.ts" />

 module Controllers {
        export class MapController {
            $scope: any;
            $searchService: Services.Search;
            $siteService: Services.SiteService;

            constructor($scope, $searchService, $siteService) {
                this.$scope = $scope;
                this.$searchService = $searchService;
                this.$siteService = $siteService;

                this.$scope.map = {
                    markers: [],
                    center: {
                        latitude: 45,
                        longitude: -22
                    },
                    zoom: 5
                };
                this.attachMapEvents();
                this.getMarkers();
            }
            private attachMapEvents() {
                this.$scope.map.markerEvents = {
                    dblclick: function() {
                        console.log('dblclick');                        
                    },
                    click: function() {
                        console.log('click');
                    }
                };
            }
            private getMarkers() {
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT' }).then((operations: Array<any>) => {
                    operations.forEach((operation) => {
                        if (operation.PzlLocationOWSTEXT) {
                            var location = angular.fromJson(operation.PzlLocationOWSTEXT);
                            this.$scope.map.markers.push({
                                title: operation.Title,
                                coords: location.coords
                            });
                        }
                    });
                })
            }
            createOperationRoom(name) {
                this.$siteService.create(name);
            }
        }
 }