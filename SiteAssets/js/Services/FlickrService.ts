/// <reference path="..\..\..\typings\tsd.d.ts" />
 module Services {
        export class Flickr {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }

            getPicturesForLocation(latitude,longitude) {
                var searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1ba5cc005deb380e8b1cb2e271095f62&lat=${latitude}&lon=${longitude}&format=json&nojsoncallback=1`
                
                return this.$q((resolve, reject) => {
                    this.$http.get(searchUrl).success((response: any) => {
                        resolve(response);
                    }).error(() => {
                        reject();
                    });
                });
            }
        }
 }



