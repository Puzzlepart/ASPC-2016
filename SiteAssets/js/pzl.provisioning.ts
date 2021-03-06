/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="pzl.config.ts" />
/// <reference path="pzl.utilities.ts" />

module Pzl.Provisioning {
    var titleSelector = "#SubwebTitle",
        descSelector = "#SubwebDescription",
        urlSelector = "#SubwebName",
        inheritPermissionsSelector = "#InheritedSubweb",
        templateSelector = "#Pzl_Template";
    var createWebWaitDialog;
    
    export function Create() {
        var createInfo = {
            url: jQuery(urlSelector).val(),
            title: jQuery(titleSelector).val(),
            description: jQuery(descSelector).val(),
            webTemplate: Config.PROVISIONING_WEBTEMPLATE,
            webLanguage: Config.PROVISIONING_LANGUAGE,
            inheritPermissions: true,
            template: jQuery(templateSelector).val()
        };
        createWebWaitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(Config.PROVISIONING_WAITMESSAGE_TEXT, Config.PROVISIONING_WAITMESSAGE_DESCRIPTION, 130, 600);
        ProvisionOperationItem(createInfo.title, createInfo.url).then((listItem) => {
            ProvisionSubsite(createInfo).then((web: SP.Web) => {
                StampPropertyBag(web, createInfo.template).then(() => {
                    AddCustomActions(web).then(() => {
                        SetupFeatures(web).then(() => {
                            RedirectToWeb(web);
                        });
                    });
                })
            })
        }).fail((sender, args) => {
            var sId = SP.UI.Status.addStatus(Config.PROVISIONING_FAILED, args.get_message(), true);
            SP.UI.Status.setStatusPriColor(sId, "red");
            createWebWaitDialog.close();
        });
    }
    function ProvisionSubsite(createInfo) {
        var def = jQuery.Deferred();
        ExecuteOrDelayUntilScriptLoaded(() => {
            var clientContext = SP.ClientContext.get_current();
            var currentWeb = clientContext.get_web();
            var webCreateInfo = new SP.WebCreationInformation();
            webCreateInfo.set_description(createInfo.description);
            webCreateInfo.set_language(createInfo.webLanguage);
            webCreateInfo.set_title(createInfo.title);
            webCreateInfo.set_url(createInfo.url);
            webCreateInfo.set_useSamePermissionsAsParentSite(createInfo.inheritPermissions);
            webCreateInfo.set_webTemplate(createInfo.webTemplate);
            var newWeb = currentWeb.get_webs().add(webCreateInfo);
            clientContext.load(newWeb);
            clientContext.executeQueryAsync(() => def.resolve(newWeb), def.reject);
        }, "sp.js");

        return def.promise();
    }
    
    function ProvisionOperationItem(title, url) {
        var def = jQuery.Deferred();
        ExecuteOrDelayUntilScriptLoaded(() => {
            var clientContext = SP.ClientContext.get_current();
            var operationsList = clientContext.get_web().get_lists().getByTitle('Operations');

            var itemCreateInfo = new SP.ListItemCreationInformation();
            var newOperation = operationsList.addItem(itemCreateInfo);
            newOperation.set_item('Title', title);
            newOperation.set_item('OperationUrl', url);
            newOperation.update();

            clientContext.load(newOperation);
            clientContext.executeQueryAsync(() => def.resolve(newOperation), def.reject);
        }, "sp.js");

        return def.promise();
    }
    function StampPropertyBag(web: SP.Web, template: string) {
        var def = jQuery.Deferred();
        var clientContext = web.get_context();
        var propBag = web.get_allProperties();
        propBag.set_item(Config.PROVISIONING_TEMPLATE_KEY, template);
        propBag.set_item(Config.PROVISIONING_TEMPLATE_STAMPED_KEY, "0");
        web.update();
        clientContext.executeQueryAsync(def.resolve, def.reject);
        return def.promise();
    }
    function AddCustomActions(web: SP.Web) {
        var def = jQuery.Deferred();

        var clientContext = web.get_context();
        var webCustomActions = web.get_userCustomActions();

        var setupAction = webCustomActions.add();
        setupAction.set_location('ScriptLink');
        setupAction.set_sequence(100);
        setupAction.set_scriptBlock("(_v_dictSod.hasOwnProperty('jquery.min.js') || SP.SOD.registerSod('jquery.min.js', '~sitecollection/siteassets/pzl/js/jquery.min.js'));SP.SOD.registerSod('pzl.workspace.setup.js', '~sitecollection/siteassets/pzl/js/pzl.workspace.setup.js');SP.SOD.registerSodDep('pzl.workspace.setup.js', 'jquery.min.js');EnsureScriptFunc('pzl.workspace.setup.js', null, function() {});")
        setupAction.set_name("pzl.workspace.setup.js");
        setupAction.set_title("pzl.workspace.setup.js");
        setupAction.update();

        clientContext.load(web, 'Title', 'UserCustomActions');
        clientContext.executeQueryAsync(def.resolve, def.reject);
        return def.promise();
    }
    function SetupFeatures(web: SP.Web) {
        var def = jQuery.Deferred();

        var clientContext = web.get_context();
        var webFeatures = web.get_features();
        webFeatures.remove(new SP.Guid("87294c72-f260-42f3-a41b-981a2ffce37a"), true);
        web.update();

        clientContext.executeQueryAsync(def.resolve, def.reject);

        return def.promise();
    }
    function RedirectToWeb(web: SP.Web) {
        document.location.href = web.get_url();
    }
    export function Cancel() {
        document.location.href = _spPageContextInfo.webServerRelativeUrl;
    }
    export function RetrieveTemplates() {
        Utilities.getJSON(`${_spPageContextInfo.siteAbsoluteUrl}/_api/web/GetFolderByServerRelativeUrl('${_spPageContextInfo.siteServerRelativeUrl}/SiteTemplates')/Files?$select=Title,Name&$orderby=TimeLastModified desc`, (response) => {
            response.results.forEach(r => {
                jQuery(templateSelector).append(`<option value='${r.Name.split(".")[0]}'>${r.Title}</option>`);
            });
            jQuery(templateSelector).removeAttr("disabled");
            jQuery(templateSelector).find("option").first().attr("selected", "");
            jQuery("#FormActions input").removeAttr("disabled");
        }, () => {
            var statusId = SP.UI.Status.addStatus(Config.PROVISIONING_FAILED_TO_RETRIEVE_TEMPLATES, '', true);
            SP.UI.Status.setStatusPriColor(statusId, 'red');
        });
    }
    function AutofillUrl() {
        jQuery(urlSelector).attr("disabled", "");
        jQuery(titleSelector).keyup(function() { jQuery(urlSelector).val(jQuery(this).val().split(' ').join('-')); })
    }
    function IntializeForm() {
        window.EnsureScriptFunc('jquery.min.js',null,function(){
            RetrieveTemplates();
            AutofillUrl();
        }, 'jquery.min.js');        
    }
    _spBodyOnLoadFunctions.push(IntializeForm);
}