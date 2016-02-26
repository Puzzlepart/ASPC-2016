<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    <SharePoint:FieldValue FieldName="Title" runat="server" /> -
    <SharePoint:projectproperty property="Title" runat="server" />
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageImage" runat="server">
    <img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <SharePoint:ProjectProperty Property="Title" runat="server" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderTitleAreaClass" runat="server">
    <SharePoint:ProjectProperty Property="Title" runat="server" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <meta name="CollaborationServer" content="SharePoint Team Web Site" />
    <SharePoint:styleblock runat="server">
        .s4-nothome { display:none; }
    </SharePoint:styleblock>
    <SharePoint:scriptblock runat="server">
        var navBarHelpOverrideKey = "WSSEndUser";
    </SharePoint:scriptblock>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderSearchArea" runat="server">
    <SharePoint:DelegateControl runat="server" ControlId="SmallSearchInputBox" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderLeftActions" runat="server" />
<asp:Content ContentPlaceHolderID="PlaceHolderPageDescription" runat="server" />
<asp:Content ContentPlaceHolderID="PlaceHolderBodyAreaClass" runat="server">
    <SharePoint:styleblock runat="server">
        .ms-bodyareaframe { padding: 0px; }
    </SharePoint:styleblock>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
   <link href='https://fonts.googleapis.com/css?family=Marvel:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="../SiteAssets/pzl/css/animate.css">
    <link rel="stylesheet" href="http://appsforoffice.microsoft.com/fabric/1.0/fabric.min.css">
    <link rel="stylesheet" href="http://appsforoffice.microsoft.com/fabric/1.0/fabric.components.min.css">
    <div id="homeApp" ng-cloak>
        <div data-ng-controller="opsController">
            <div id="operation-map">
                <ui-gmap-google-map center='map.center' zoom='map.zoom' id="ops-map">
                    <ui-gmap-window coords="map.selectedMarker.coords" show="map.selectedMarker" closeClick="map.selectedMarker=null;" class="ops-marker selected">
                        <div>
                            <h3>{{map.selectedMarker.Title}}</h3>
                            <!--<div><b>Heroes:</b> {{map.selectedMarker.PzlHeroesOWSUSER}}</div>
                            <div><b>Villains:</b> {{map.selectedMarker.PzlVillainOWSUSER}}</div>-->
                            <div><b>Latitude:</b> {{map.selectedMarker.coords.latitude}}</div>
                            <div><b>Longitude:</b> {{map.selectedMarker.coords.longitude}}</div>
                            <div><a ng-href="{{map.selectedMarker.OriginalPath}}">Go to operation</a></div>
                        </div>
                    </ui-gmap-window>
                    <ui-gmap-markers models="map.markers" idkey="map.markers.id" coords="'coords'" events="map.markerEvents" class="ops-marker"></ui-gmap-markers>
                </ui-gmap-google-map>
            </div>
            <div class="container comicblue active-operations">
                <h2><span class="material-icons">public</span>Active Operations</h2>
                <ul id="operations" class="tiles">
                    <li class="animated flipInY" ng-repeat="op in Operations" ng-click="selectOperation(op)">
                        <img class="tile-image" ng-src="{{op.LocationImageUrl}}">
                        <div class="tile-name">
                            <h3>{{op.Title}}</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="container comicgrey">
                <h2><span class="material-icons">public</span> Operational Statistics</h2>
                <ul id="statistics" class="tiles">
                    <li class="animated flipInY" ng-repeat="stat in basicStats">
                        <img class="tile-image" ng-src="{{stat.image}}">
                        <div class="tile-name">
                            <h3>{{stat.name}} ({{stat.count}})</h3> 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container comicblue" data-ng-controller="heroesController">
            <h2><span class="material-icons">mood</span>Featured Heroes</h2>
            <ul id="heroes" class="tiles">
                <li class="animated flipInY" ng-repeat="hero in Heroes track by $index">
                    <a ng-href="Hero.aspx?hero={{hero.PreferredName}}"><img class="tile-image" ng-src="{{hero.PictureURL}}"></a>
                    <div class="tile-name">
                        <h3><a ng-href="Hero.aspx?hero={{hero.PreferredName}}">{{hero.PreferredName}}</a></h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <script src='../SiteAssets/pzl/js/pzl.dangerroom.js'></script>
</asp:Content>
