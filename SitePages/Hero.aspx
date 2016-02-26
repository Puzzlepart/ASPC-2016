<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:webpartpageexpansion="full" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ListFormPageTitle runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server">
	<img src="/_layouts/15/images/blank.gif?rev=41" width='1' height='1' alt="" data-accessibility-nocheck="true"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" class="pzl-hero-page" runat="server">
<SharePoint:UIVersionedContent UIVersion="4" runat="server">
</SharePoint:UIVersionedContent>
    <link href='//fonts.googleapis.com/css?family=Marvel:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="../SiteAssets/pzl/css/dangerroom/main.css">
    <link rel="stylesheet" href="//appsforoffice.microsoft.com/fabric/1.0/fabric.min.css">
    <link rel="stylesheet" href="//appsforoffice.microsoft.com/fabric/1.0/fabric.components.min.css">

    <div class="hero-page">
        <div class="container video-header map">
            <video class="videobackground" muted loop="loop" preload="auto" data-setup="{}" webkit-playsinline="" autoplay="" poster="null" src="../SiteAssets/pzl/img/marvelintro.mp4" style=""></video>
            <h2 class="hero-name">Iron Man</h2>
            <img src="../SiteAssets/pzl/img/standard_xlarge.jpg" class="hero-img"/>
            <p class="hero-desc">
                Anthony "Tony" Stark was born to Howard Anthony Stark and Maria Collins Carbonell Stark, owners of the prominent US firm, Stark Industries. As a boy, Tony was fascinated with building and controlling machines. At the age of 15 Tony entered the undergraduate electrical engineering program at the Massachusetts Institute of Technology (MIT), and graduated with two master’s degrees by age 19.
            </p>
            
        </div>

        <div class="container pzl-hero-stats">
            <h2>Stats</h2>
            <div class="pzl-hero-stat">
            </div>
            <div class="pzl-hero-stat">
            </div>
            <div class="pzl-hero-stat">
            </div>
        </div>
        <div class="container pzl-hero-items">
                <div class="pzl-hero-docs half">
                    <h2>Documents</h2>
            
                </div>
                <div class="pzl-hero-emails half">
            <h2>E-mails</h2>
                </div>
        </div>
        <div class="container pzl-hero-oprooms">
            <h2>Operation Rooms</h2>
        </div>
        <div class="container pzl-hero-media">
                <h2>Media</h2>
        </div>
        <div class="container">
            <button class="ms-Button js-togglePanel"> <span class="ms-Button-label">See Tasks</span> </button>
            <div class="ms-Panel">
            <div class="ms-Overlay ms-Overlay--dark js-togglePanel"></div>
            <div class="ms-Panel-main">
                <div class="ms-Panel-commands">
                <div class="ms-CommandBar">
                    <div class="ms-CommandBar-sideCommands">
                        <div class="ms-CommandBarItem icon-only">
                            <div class="ms-CommandBarItem-linkWrapper">
                            <div class="ms-CommandBarItem-link"><span class="ms-CommandBarItem-icon ms-Icon ms-Icon--circleFilled"></span> <span class="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Stars</span> <i class="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i></div>
                            </div>
                        </div>
                        <div class="ms-CommandBarItem">
                            <div class="ms-CommandBarItem-linkWrapper">
                            <div class="ms-CommandBarItem-link"><span class="ms-CommandBarItem-icon ms-Icon ms-Icon--circleFilled"></span> <span class="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Stars</span> <i class="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i></div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                </div>
                <div class="ms-Panel-contentInner"><span class="ms-Panel-headerText">Panel</span>
                <p class="ms-font-m">Content goes here.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	</div>
	</ContentTemplate>
</SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
                            <SharePoint:ScriptLink Name="~sitecollection/siteassets/pzl/js/jquery.min.js" runat="server" Language="javascript"></SharePoint:ScriptLink>
                            <SharePoint:ScriptLink Name="~sitecollection/siteassets/pzl/js/pzl.hero.js" runat="server" Language="javascript"></SharePoint:ScriptLink>
	<SharePoint:DelegateControl runat="server" ControlId="FormCustomRedirectControl" AllowMultipleControls="true"/>
	<SharePoint:UIVersionedContent UIVersion="4" runat="server"><ContentTemplate>
		<SharePoint:CssRegistration Name="forms.css" runat="server"/>
	</ContentTemplate></SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleLeftBorder" runat="server">
<table cellpadding="0" height="100%" width="100%" cellspacing="0">
 <tr><td class="ms-areaseparatorleft"><img src="/_layouts/15/images/blank.gif?rev=41" width='1' height='1' alt="" data-accessibility-nocheck="true"/></td></tr>
</table>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleAreaClass" runat="server">
<script type="text/javascript" id="onetidPageTitleAreaFrameScript">
	if (document.getElementById("onetidPageTitleAreaFrame") != null)
	{
		document.getElementById("onetidPageTitleAreaFrame").className="ms-areaseparator";
	}
</script>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyAreaClass" runat="server">
<SharePoint:StyleBlock runat="server">
.ms-bodyareaframe {
	padding: 8px;
	border: none;
}
</SharePoint:StyleBlock>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyLeftBorder" runat="server">
<div class='ms-areaseparatorleft'><img src="/_layouts/15/images/blank.gif?rev=41" width='8' height='100%' alt="" data-accessibility-nocheck="true"/></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=41" width='8' height='100%' alt="" data-accessibility-nocheck="true"/></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=41" width='8' height='100%' alt="" data-accessibility-nocheck="true"/></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleAreaSeparator" runat="server"/>