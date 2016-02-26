/// <reference path="..\..\..\typings\tsd.d.ts" />
 module Services {
        export class SiteService {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }
            
            getSiteProperties(siteUrl: string) {
                return this.$q((resolve, reject) => {
                    this.$http.get(`${siteUrl}/_api/web/lists/getByTitle('Site Pages')/Items(1)`).success((response: any) => {
                        resolve(response.d);
                    }).error(() => {
                        reject();
                    });
                });
            }
        }
 }



