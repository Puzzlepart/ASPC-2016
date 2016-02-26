/// <reference path="..\..\..\typings\tsd.d.ts" />

 module Controllers {
    export class HeroesController {
        $scope: any;
        $searchService: Services.Search;
        $marvelService: Services.Marvel;
        
        constructor($scope, $searchService, $flickrService, $marvelService) {
            this.$scope = $scope;
            this.$searchService = $searchService;
            this.$marvelService = $marvelService;
            
            this.getTopHeroes();
        }
        
        private getTopHeroes() {
            this.$searchService.query({ querytext: '*', sourceid: 'b09a7990-05ea-4af9-81ef-edfab16c4e31' })
            .then((heroes: Array<any>) => {
                this.$scope.Heroes = heroes;
                this.$scope.Heroes.forEach((hero, index) => {
                   if (!hero.PictureURL) {
                       this.$marvelService.getHeroDataFromName(hero.PreferredName).then((data) => {
                           this.$scope.Heroes[index].PictureUrl = data.thumbnail.path+"."+data.thumbnail.extension;
                       });
                   } 
                });
            })
        }
    }
 }