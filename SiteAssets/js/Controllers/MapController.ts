/// <reference path="..\..\..\typings\tsd.d.ts" />
/// <reference path="..\Services\services.d.ts" />

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
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'Title,OriginalPath,PzlLocationOWSTEXT,PzlHeroesOWSUSER,PzlVillainOWSUSER' }).then((operations: Array<any>) => {
                    operations.forEach((operation) => {
                        var coords = operation.PzlLocationOWSTEXT ? angular.fromJson(operation.PzlLocationOWSTEXT): null;
                        this.$scope.map.markers.push(angular.extend(operation, { 
                            id: Math.floor((Math.random()*1000))
                        }, coords))
                    });
                })
            }
            createOperationRoom(name) {
                this.$siteService.create(name);
            }
        }
 }