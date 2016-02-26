/// <reference path="..\..\..\typings\tsd.d.ts" />
 module Services {
        export class GraphService {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }
        }
 }



