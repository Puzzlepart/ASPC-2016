/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\..\typings\angularjs\angular.d.ts" />
/// <reference path="pzl.config.ts" />
/// <reference path="pzl.utilities.ts" />

module Services {
    module Services {
        export class Search {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }

            query(queryParameters: any) {
                var searchUrl = `${_spPageContextInfo.siteAbsoluteUrl}/_api/search/query?${this.getQueryString(queryParameters)}`;
                return this.$q((resolve, reject) => {
                    this.$http.get(searchUrl).success((response: any) => {
                        resolve(this.parseSearchResults(response, queryParameters.groupby));
                    }).error(() => {
                        reject();
                    });
                });
            }

            private parseSearchResults(results: any, groupBy?: string) {
                var query = results.d.query;
                if (!query.PrimaryQueryResult) return [];
                var primaryQueryResult = query.PrimaryQueryResult;
                var relevantResults = primaryQueryResult.RelevantResults;
                var rows = relevantResults.Table.Rows.results;
                var items = [];
                rows.forEach(r => {
                    var item = {};
                    r.Cells.results.forEach(c => {
                        item[c.Key] = c.Value;
                    });
                    items.push(item);
                });
                if (groupBy) {
                    var object = {};
                    items.forEach(itm => {
                        if (itm[groupBy] == "") return;
                        object[itm[groupBy]] = object[itm[groupBy]] || [];
                        object[itm[groupBy]].push(itm);
                    });
                    return object;
                }
                return items;
            }

            private getQueryString(obj: any) {
                var arr = []; for (var k in obj) { if (k == 'groupby') continue; arr.push(`${k}='${obj[k]}'`); } return arr.join("&");
            }
        }
    }
    module Controllers {
        export class MapController {
            $scope: any;
            $searchService: Services.Search;

            constructor($scope, $searchService) {
                this.$scope = $scope;
                this.$searchService = $searchService;

                this.$scope.map = {
                    markers: [],
                    center: {
                        latitude: 45,
                        longitude: -22
                    },
                    window: {
                        show: true,
                        coords: {
                            latitude: 45,
                            longitude: -22
                        }
                    },
                    zoom: 5
                };
                this.attachMapEvents();
                this.getMarkers();
            }
            private attachMapEvents() {
                this.$scope.map.events = {
                    rightclick: (map, eventName, originalEventArgs) => {
                        this.$scope.$apply(() => {
                            this.$scope.map.window.coords = {
                                latitude: originalEventArgs[0].latLng.lat(),
                                longitude: originalEventArgs[0].latLng.lng()
                            };
                            this.$scope.map.show = true;
                        });
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
        }
    }

    EnsureScriptFunc('angular-google-maps.min.js', null, function() {
        var app = angular.module("app", ['uiGmapgoogle-maps']).config(
            ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
                GoogleMapApiProviders.configure({
                    china: true
                });
            }])
            .config(["$httpProvider", ($httpProvider) => {
                $httpProvider.defaults.headers.common["Accept"] = "application/json; odata=verbose";
            }])
            .service("$searchService", Services.Search)
            .controller("mapController", Controllers.MapController);
        angular.bootstrap(document.getElementById('homeApp'), ['app']);
    });