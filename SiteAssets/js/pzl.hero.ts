/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="Controllers\controllers.d.ts" />
/// <reference path="Services\services.d.ts" />
/// <reference path="pzl.utilities.ts" />

module Pzl.heroPage {

    module _config {
        export const apiKey: string = "326b9124ce39cf26bf0c3746d03d5e73";
        export const hash: string = "9921fd504791b84506e01303bb73edbe";
        export const timeStamp: number = 1;
    }

    module Model {
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
                this.Photo = d.thumbnail.path.substr(d.thumbnail.path.indexOf('/'), d.thumbnail.path.length) + "." + d.thumbnail.extension;
                this.NumberOfComics = d.comics.available;
                this.NumberOfEvents = d.events.available;
                this.NumberOfSeries = d.series.available;
            }
        }
    }

    export function getHeroByName(heroName: string) {
        var $q = jQuery.Deferred();
        var Url = `https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=${_config.timeStamp}&apikey=${_config.apiKey}&hash=${_config.hash}`;
        jQuery.ajax({
            type: "GET",
            url: Url,
            success: function(response) {
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
            success: function(response) {
                console.log(response.data.results[0]);
                $q.resolve(response.data.results[0]);
            }
        });
        return $q.promise();
    }

    export function init() {
        var hero = GetUrlKeyValue("hero");
        //fuck you guys because the query string is LOWERCASE OK?!! SHIIIIET
        if (!hero) hero = GetUrlKeyValue("Hero");
        if (hero) {
            if (hero.match(/[a-z]/i))
                getHeroByName(hero).then(function(heroData) { populateHeroPage(heroData) });
            else
                getHeroById(hero).then(function(heroData) { populateHeroPage(heroData) });
        }
        setDocuments();
        else { console.log("no hero specified"); }
    }

    export function populateHeroPage(heroData) {
        var hero = new Model.Hero(heroData);
        setHeroData('.hero-name', hero.Name);
        if (!hero.Description) jQuery('.hero-desc').hide();
        else setHeroData('.hero-desc', hero.Description);
        setHeroImg('.hero-img', hero.Photo);
    }
    function setDocuments(){
        // smoke and mirrors .... 
        var docNames = ["TPS report.docx",
            "Hero appraisal report.docx",
            "Expense report 2016.xlsx",
            "Incident report Paris 2016.docx",
            "Incident report China 2013.docx",
            "Incident report Oslo 2014.docx",
            "Incident report Abu Dabi 2012.docx",
            "Incident report Stockholm 2016.docx",
            "Expense report 2016.xlsx",
            "Expense report 2015.xlsx",
            "Expense report 2014.xlsx",
            "Expense report 2013.xlsx",
            "Expense report 2012.xlsx",
            "How to get awesome superpowers.docx"]
        var html = [];
        docNames.forEach(function(item,index){ 
            if(Math.random()>0.7){
                // dirty just got worse... inine styles
                html.push("<div class='hero-document' style='color: white; font-size: 29px'>"+item+"</div>");
            }
        });    
        jQuery("#hero-documents").html(html.join(""));
    }

    function setHeroImg(id, url) { jQuery(id).attr('src', url); }
    function setHeroData(id, val) { jQuery(id).html(val); }
    function listHeroData(id, val) {
        for (var li in val) {
            //WIP
        }
    }

    jQuery(function() {
        init();
    });
}