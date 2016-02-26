/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />
/// <reference path="pzl.utilities.ts" />

module Pzl.heroPage{
    
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
}