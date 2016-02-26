/// <reference path="..\..\..\typings\tsd.d.ts" />
/// <reference path="..\Services\services.d.ts" />

 module Controllers {
        export class OperationsController {
            $scope: any;
            $searchService: Services.Search;
            
            constructor($scope, $searchService, $flickrService) {
                this.$scope = $scope;
                this.$searchService = $searchService;
                
                this.getTopHeroes();
            }
            
            private getTopHeroes() {
                this.$searchService.query({ querytext: '*', selectproperties: 'DisplayName,AccountName', sourceid: 'b09a7990-05ea-4af9-81ef-edfab16c4e31' })
                .then((heroes: Array<any>) => {
                    this.$scope.Heroes = heroes;
                    this.$scope.Heroes.forEach((hero, index) => {
                        // this.$scope.Heroes[index].LocationImageUrl = "../SiteAssets/pzl/img/location.jpg";
                        
                        // this.$flickrService.getPicturesForLocation(location.coords.latitude, location.coords.longitude).then((data) => {
                        //     if (data.photos && data.photos.photo.length > 0)
                        //     {
                        //         var photo = data.photos.photo[0];
                        //         var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                        //         this.$scope.Operations[index].LocationImageUrl = url;
                        //         this.$scope.Operations[index].ImageSet = true;
                        //         
                        //     }
                        // });
                    });
                })
            }
        }
 }