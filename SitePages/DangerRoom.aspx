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
    <h1 class="room-title">Danger Room</h1>
    <div id="homeApp">
        <div data-ng-controller="mapController">
            <ui-gmap-google-map center='map.center' zoom='map.zoom' marker-events="map.markerEvents">
                <ui-gmap-window coords="map.selectedMarker.coords" show="map.selectedMarker">
                    <div>
                        <div><b>Location:</b> {{map.window.coords}}</div>
                    </div>
                </ui-gmap-window>
                <ui-gmap-markers idkey="marker.$index" models="map.markers" coords="'self'" events="map.markersEvent""></ui-gmap-markers>
            </ui-gmap-google-map>
        </div>
        <div class="container comicblue">
       <h2><span class="material-icons">public</span> Top Operations</h2>
            <ul id="users">
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge.jpg">
                    <div class="user-name">
                            <h3>London</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-1.jpg">
                    <div class="user-name">
                            <h3>Paris</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Syria</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Washington D.C.</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3></h3>
                    </div>
                </li>
            </ul>
        </div>
       <div class="container">
        <!-- <video class="videobackground" muted loop="loop" preload="auto" data-setup="{}" webkit-playsinline="" autoplay="" poster="null" src="marvelintro.mp4" style=""></video> -->

        <h2><span class="material-icons">show chart</span> Operational Statistics</h2>
            <ul id="users">
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge.jpg">
                    <div class="user-name">
                            <h3>London</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-1.jpg">
                    <div class="user-name">
                            <h3>Paris</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Syria</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Washington D.C.</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3></h3>
                    </div>
                </li>
            </ul>
        </div>
        <div class="container comicgrey">
        <!-- <video class="videobackground" muted loop="loop" preload="auto" data-setup="{}" webkit-playsinline="" autoplay="" poster="null" src="marvelintro.mp4" style=""></video> -->

        <h2><span class="material-icons">mood</span> Top Heroes</h2>
            <ul id="users">
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge.jpg">
                    <div class="user-name">
                            <h3>Iron Man </h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-1.jpg">
                    <div class="user-name">
                            <h3>Spider-Man </h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
            </ul>
        </div>
        <div class="container comicgrey">
        <!-- <video class="videobackground" muted loop="loop" preload="auto" data-setup="{}" webkit-playsinline="" autoplay="" poster="null" src="marvelintro.mp4" style=""></video> -->

        <h2><span class="material-icons">mood bad</span> Top Villians</h2>
            <ul id="users">
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge.jpg">
                    <div class="user-name">
                            <h3>Iron Man </h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-1.jpg">
                    <div class="user-name">
                            <h3>Spider-Man </h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
                <li class="animated flipInY">
                    <img src="../SiteAssets/pzl/img/standard_xlarge-2.jpg">
                    <div class="user-name">
                            <h3>Hulk</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <script src='../SiteAssets/pzl/js/pzl.dangerroom.js'></script>
</asp:Content>
