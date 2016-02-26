/// <reference path="..\..\..\typings\tsd.d.ts" />
 module Services {
        export class SiteService {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }

            create(name: string) {

            }
        }
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