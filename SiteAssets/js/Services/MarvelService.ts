/// <reference path="..\..\..\typings\tsd.d.ts" />
 module Services {
        export class Marvel {
            $http: ng.IHttpService;
            $q: ng.IQService;

            constructor($http, $q: ng.IQService) {
                this.$http = $http;
                this.$q = $q;
            }

            getHeroDataFromName(heroName) {
                var url = `https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1&apikey=326b9124ce39cf26bf0c3746d03d5e73&hash=9921fd504791b84506e01303bb73edbe`;
                
                return this.$q((resolve, reject) => {
                    this.$http.get(url).success((response: any) => {
                        resolve(response);
                    }).error(() => {
                        reject();
                    });
                });
            }
        }
 }