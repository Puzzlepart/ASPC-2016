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
            this.$searchService.query({ querytext: 'NOT PreferredName:"MOD Administrator" AND NOT PreferredName:"_spocrwl_311_15487" AND NOT PreferredName:"Support" AND NOT PreferredName:"_spoapp_311_15507"', sourceid: 'b09a7990-05ea-4af9-81ef-edfab16c4e31' })
            .then((heroes: Array<any>) => {
                this.$scope.Heroes = heroes;
                this.$scope.Heroes.forEach((hero, index) => {
                    if (this.$scope.Heroes[index]) {
                        this.$scope.Heroes[index].PictureURL = "../SiteAssets/pzl/img/default_hero.jpg";
                    }
                    this.$marvelService.getHeroDataFromName(hero.PreferredName).then((data) => {
                        if (this.$scope.Heroes[index] && data.thumbnail.path) {
                            this.$scope.Heroes[index].PictureURL = data.thumbnail.path+"."+data.thumbnail.extension;
                        }
                    });
                });
            })
        }
    }
 }