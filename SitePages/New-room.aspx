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
                        <SharePoint:ScriptLink Name="~sitecollection/siteassets/nfdasd/js/nfdasd.provisioning.js" runat="server" Language="javascript"></SharePoint:ScriptLink>
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
                        <style type="text/css">
                            .ms-WPBorder {
                                border: none;
                            }
                        </style>
                        <table class="ms-propertysheet" border="0" cellspacing="0" cellpadding="0">

                            <tbody>
                                <tr>
                                    <td class="ms-sectionline" height="1" colspan="2">
                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                </tr>

                                <tr>
                                    <td class="ms-formdescriptioncolumn-wide" valign="top">
                                        <table border="0" cellpadding="1" cellspacing="0" width="100%" summary="" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td class="ms-sectionheader" style="padding-top: 4px;" height="22" valign="top">
                                                        <h3 class="ms-standardheader ms-inputformheader">Tittel og beskrivelse

                                    </h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ms-descriptiontext ms-inputformdescription"></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="8" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="19" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="ms-authoringcontrols ms-inputformcontrols" valign="top" align="left">
                                        <table border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">

                                            <tbody>
                                                <tr>

                                                    <td width="9px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="9" height="7" alt="" data-accessibility-nocheck="true"></td>

                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="7" alt="" data-accessibility-nocheck="true"></td>

                                                    <td width="10px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>

                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td class="ms-authoringcontrols">

                                                        <table class="ms-authoringcontrols" border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">


                                                            <tbody>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" colspan="2">
                                                                        <span>Tittel:</span>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" width="99%">

                                                                        <input id="SubwebTitle" type="text" maxlength="255" size="35" class="ms-input" title="Tittel" alwaysenablesilent="true">
                                                                        <span class="ms-error" style="display: none;">
                                                        <br>
                                                        <span role="alert">Angi tittelen for det nye området.</span></span>


                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" colspan="2">
                                                                        <span>Beskrivelse:</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" width="99%">
                                                                        <textarea id="SubwebDescription" rows="3" cols="40" class="ms-input" title="Beskrivelse" alwaysenablesilent="true"></textarea>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" colspan="2">
                                                                        <span></span>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="11px">
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="11" height="1" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                    <td class="ms-authoringcontrols" width="99%"></td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>



                                                            </tbody>
                                                        </table>

                                                    </td>
                                                    <td width="10px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="13" alt="" data-accessibility-nocheck="true"></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>


                                <tr>
                                    <td class="ms-sectionline" height="1" colspan="2">
                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                </tr>

                                <tr>
                                    <td class="ms-formdescriptioncolumn-wide" valign="top">
                                        <table border="0" cellpadding="1" cellspacing="0" width="100%" summary="" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td class="ms-sectionheader" style="padding-top: 4px;" height="22" valign="top">
                                                        <h3 class="ms-standardheader ms-inputformheader">Adresse til nettsted

                                    </h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ms-descriptiontext ms-inputformdescription"></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="8" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="19" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="ms-authoringcontrols ms-inputformcontrols" valign="top" align="left">
                                        <table border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">

                                            <tbody>

                                                <tr>
                                                    <td></td>
                                                    <td class="ms-authoringcontrols">

                                                        <table class="ms-authoringcontrols" border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">


                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <!-- End Right_Text -->
                                                                <tr>
                                                                    <td width="11px">
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="11" height="1" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                    <td class="ms-authoringcontrols" width="99%">

                                                                        <table border="0" cellpadding="0" cellspacing="0" dir="ltr">
                                                                            <tbody>
                                                                                <tr nowrap="nowrap">

                                                                                    <td class="ms-authoringcontrols">
                                                                                        <input id="SubwebName" type="text" maxlength="260" size="18" class="ms-input" title="Opprett navn på sekundært område" alwaysenablesilent="true"> 
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>


                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>



                                                            </tbody>
                                                        </table>

                                                    </td>
                                                    <td width="10px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="13" alt="" data-accessibility-nocheck="true"></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>


                                <tr>
                                    <td class="ms-sectionline" height="1" colspan="2">
                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                </tr>

                                <tr>
                                    <td class="ms-formdescriptioncolumn-wide" valign="top">
                                        <table border="0" cellpadding="1" cellspacing="0" width="100%" summary="" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td class="ms-sectionheader" style="padding-top: 4px;" height="22" valign="top">
                                                        <h3 class="ms-standardheader ms-inputformheader">Valg av mal</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="ms-descriptiontext ms-inputformdescription"></td>
                                                    <td><img src="/_layouts/15/images/blank.gif?rev=42" width="8" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>
                                                <tr>
                                                    <td><img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="19" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="ms-authoringcontrols ms-inputformcontrols" valign="top" align="left">
                                        <table border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td class="ms-authoringcontrols">

                                                        <table class="ms-authoringcontrols" border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">



                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <!-- End Right_Text -->


                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>


                                                                <tr>
                                                                    <td class="ms-authoringcontrols" colspan="2">
                                                                        <label for="ctl00_PlaceHolderMain_InputFormTemplatePickerControl_ctl00_ctl01_LbWebTemplate">Velg en mal:</label>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="11px">
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="11" height="1" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                    <td class="ms-authoringcontrols" width="99%">

                                                                        <div class="ms-templatepicker">
                                                                            <select id="NFDASD_Template" size="12" class="ms-templatepicker-select ms-templatepicker ms-floatLeft">
                                                                            </select>
                                                                            <div class="ms-descriptiontext ms-floatLeft" style="width: 440px; display: inline;">
                                                                                <span id="LabelWebTemplateDescription"></span>
                                                                            </div>
                                                                        </div>


                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>



                                                            </tbody>
                                                        </table>

                                                    </td>
                                                    <td width="10px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="13" alt="" data-accessibility-nocheck="true"></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>



                                <tr>
                                    <td class="ms-sectionline" height="1" colspan="2">
                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                </tr>

                                <tr>
                                    <td class="ms-formdescriptioncolumn-wide" valign="top">
                                        <table border="0" cellpadding="1" cellspacing="0" width="100%" summary="" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td class="ms-sectionheader" style="padding-top: 4px;" height="22" valign="top">
                                                        <h3 class="ms-standardheader ms-inputformheader">Tillatelser

                                    </h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ms-descriptiontext ms-inputformdescription">Du kan gi tilgang til det nye området til de samme brukerne som har tilgang
                                                        til dette overordnede området, eller du kan gi tillatelse til et
                                                        unikt sett med brukere.
                                                        <br>
                                                        <br> Obs!&nbsp; Hvis du velger <b>Bruk samme tillatelser som overordnet område</b>,
                                                        vil ett sett med brukertillatelser bli delt mellom områdene. Du kan
                                                        dermed ikke endre brukertillatelsene på det nye området med mindre
                                                        du er administrator for det overordnede området.
                                                    </td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="8" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="19" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="ms-authoringcontrols ms-inputformcontrols" valign="top" align="left">
                                        <table border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">

                                            <tbody>
                                                <tr>

                                                    <td width="9px"><img src="/_layouts/15/images/blank.gif?rev=42" width="9" height="7" alt="" data-accessibility-nocheck="true"></td>
                                                    <td><img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="7" alt="" data-accessibility-nocheck="true"></td>
                                                    <td width="10px"><img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td class="ms-authoringcontrols">

                                                        <table class="ms-authoringcontrols" border="0" width="100%" cellspacing="0" cellpadding="0" summary="" role="presentation">


                                                            <tbody>
                                                                <tr>
                                                                    <td class="ms-authoringcontrols" colspan="2">
                                                                        <span>Brukertillatelser:</span>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="3" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="3px">
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="3" height="1" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                    <td class="ms-authoringcontrols" width="99%">

                                                                        <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td valign="top" width="1px">
                                                                                        <input id="InheritedSubweb" value="InheritedSubweb"" name="Permissions" type="radio" checked="checked">
                                                                                    </td>
                                                                                    <td width="1px">
                                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                                                    <td nowrap="nowrap" class="ms-authoringcontrols">
                                                                                        <label for="InheritedSubweb">Bruk samme tillatelser som overordnet
                                                                                            område </label>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td valign="top" width="1px">
                                                                                        <input id="UniqueSubweb" value="UniqueSubweb" name="Permissions" type="radio">
                                                                                    </td>
                                                                                    <td width="1px">
                                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                                                    <td nowrap="nowrap" class="ms-authoringcontrols">
                                                                                        <labe for="UniqueSubweb">Bruk unike tillatelser</label>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>


                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="1" height="6" style="display: block" alt="" data-accessibility-nocheck="true"></td>
                                                                </tr>



                                                            </tbody>
                                                        </table>

                                                    </td>
                                                    <td width="10px">
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="10" height="1" alt="" data-accessibility-nocheck="true"></td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <img src="/_layouts/15/images/blank.gif?rev=42" width="150" height="13" alt="" data-accessibility-nocheck="true"></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <table cellpadding="0" cellspacing="0" width="100%" id="FormActions">
                                            <colgroup>
                                                <col width="99%">
                                                    <col width="1%">
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td nowrap="nowrap">
                                                        <img src="/_layouts/15/images/loadingcirclests16.gif?rev=42" class="ms-verticalAlignMiddle" style="display: none;" onclick="javascript:this.style.display='none';">
                                                        <input type="button" disabled value="Opprett" onclick="NFDASD.Provisioning.Create()" accesskey="O" class="ms-ButtonHeightWidth">
                                                        <input type="button" disabled class="ms-ButtonHeightWidth" value="Avbryt" accesskey="C" onclick="NFDASD.Provisioning.Cancel()">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                        <SharePoint:ScriptBlock runat="server">if(typeof(MSOLayout_MakeInvisibleIfEmpty) == "function") {MSOLayout_MakeInvisibleIfEmpty();}</SharePoint:ScriptBlock>
                    </asp:Content>