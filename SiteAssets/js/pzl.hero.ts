/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />
/// <reference path="pzl.utilities.ts" />

module Pzl.heroPage{
    
    module _config{
    export const apiKey:string = "326b9124ce39cf26bf0c3746d03d5e73";
    export const hash:string = "9921fd504791b84506e01303bb73edbe";
    export const timeStamp:number = 1;
    }
    
    module Model{
        export class Hero {
			Id: number;
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
				this.Photo = d.thumbnail.path.substr(d.thumbnail.path.indexOf('/'),d.thumbnail.path.length)+"."+d.thumbnail.extension;
				this.NumberOfComics = d.comics.available;
				this.NumberOfEvents = d.events.available;
				this.NumberOfSeries = d.series.available;
			}
		}
    }
    
    export function getHeroByName(heroName:string) {
    var $q = jQuery.Deferred();
    var Url = `https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=${_config.timeStamp}&apikey=${_config.apiKey}&hash=${_config.hash}`;
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
    
        export function getHeroById(heroId) {
        var $q = jQuery.Deferred();
        var Url = `https://gateway.marvel.com/v1/public/characters?id=${heroId}&ts=${_config.timeStamp}&apikey=${_config.apiKey}&hash=${_config.hash}`;
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
      var hero = GetUrlKeyValue("hero");
      if(hero){
          if(hero.match(/[a-z]/i))
          getHeroByName(hero).then(function(heroData){populateHeroPage(heroData)});
          else
          getHeroById(hero).then(function(heroData){populateHeroPage(heroData)});
             }
      else{console.log("no hero specified");}
    }
    
    export function populateHeroPage(heroData){
        var hero = new Model.Hero(heroData);
        setHeroData('.hero-name',hero.Name);
        if(!hero.Description)jQuery('.hero-desc').hide();
        else setHeroData('.hero-desc',hero.Description);
        setHeroImg('.hero-img',hero.Photo);        
    }
    
    function setHeroImg(id,url){jQuery(id).attr('src',url);}
    function setHeroData(id,val){jQuery(id).html(val);}
    
   jQuery(function() {
       init();
    });
}