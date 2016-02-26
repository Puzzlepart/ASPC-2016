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
                    click: (map, eventName, marker, args) => {
                        this.$scope.$apply(() => {
                           this.$scope.map.selectedMarker = marker; 
                        });
                    }
                };
            }
            private getMarkers() {
                this.$searchService.query({ querytext: 'contentclass:STS_Web contenttypeid:0x010109010092214CADC5FC4262A177C632F516412E*', selectproperties: 'UniqueId,Title,OriginalPath,PzlLocationOWSTEXT' }).then((operations: Array<any>) => {
                    this.$scope.map.markers = operations;
                })
            }
            createOperationRoom(name) {
                this.$siteService.create(name);
            }
        }
 }