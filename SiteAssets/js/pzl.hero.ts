/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />
/// <reference path="pzl.utilities.ts" />

module Pzl.heroPage{
    
    module Model{
        export class Hero {
			Id: string;
			Name: string;
            Photo: string;
			Description: string;
			NumberOfEvents: number;
			NumberOfSeries: number;
			NumberOfComics: number;

			constructor(d) {
				this.Id = d.id;
				this.Name = d.name;
				this.Description = d.description;
				this.Photo = d.thumbnail.path+"."+d.thumbnail.extension;
				this.NumberOfComics = d.comics.available;
				this.NumberOfEvents = d.events.available;
				this.NumberOfSeries = d.series.available;
			}
		}
    }
    
    export function getHeroByName(heroName:string) {
    var $q = jQuery.Deferred();
    var Url = "https://gateway.marvel.com/v1/public/characters?name="+heroName+"&ts=1&apikey=326b9124ce39cf26bf0c3746d03d5e73&hash=9921fd504791b84506e01303bb73edbe";
    jQuery.ajax({
        type: "GET",
        url: Url,
        success: function(response){
            console.log(response.data.results[0]);
            $q.resolve(response.data.results[0]);
             }
        });
    return $q.promise();
    }
    
    export function init(){
      var heroName = GetUrlKeyValue("hero");
      if(heroName){
          getHeroByName(heroName).then(function(heroData){populateHeroPage(heroData)});
      }
      else{console.log("no hero specified");}
    }
    
    export function populateHeroPage(heroData){
        var hero = new Model.Hero(heroData);
        setHeroData('.hero-name',hero.Name);
        setHeroData('.hero-desc',hero.Description);
        setHeroImg('.hero-img',hero.Photo);        
    }
    
    function setHeroImg(id,url){jQuery(id).attr('src',url);}
    function setHeroData(id,val){jQuery(id).html(val);}
    
   jQuery(function() {
       init();
    });
}