/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="pzl.config.ts" />

module NFDASD.Workspace.Setup {
    var setupConfig: any = {
        WaitMessage: {
            Header: "Legger på malen",
            Content: "Det skal ikke ta så lang tid...",
            ShowProgress: true,
            ProgressOverrides: {
                "PropertyBagEntries": "Setter egenskaper på området",
                "Security": "Setter opp rettigheter",
                "Lists": "Setter opp lister med innholdstyper og visninger",
                "CustomActions": "Setter opp custom actions",
                "Files": "Setter opp filer med webdeler",
                "Navigation": "Setter opp venstrenavigasjon",
                "ComposedLook": "Setter på farger og fonter"
            }
        },
        Logging: {
            On: true,
            LoggingFolder: `${_spPageContextInfo.siteAbsoluteUrl}/Logs`
        }
    };

    function GetWebProperties() {
        var def = jQuery.Deferred();
        ExecuteOrDelayUntilScriptLoaded(function() {
            var clientContext = SP.ClientContext.get_current();
            var web = clientContext.get_web();
            var allProperties = web.get_allProperties();
            clientContext.load(allProperties);
            clientContext.executeQueryAsync(
                () => {
                    def.resolve(allProperties.get_fieldValues());
                }, def.reject);
        }, "sp.js");

        return def.promise();
    }
    function UpdateWebPropertyBag(key, value) {
        var def = jQuery.Deferred();

        const context = SP.ClientContext.get_current();
        const web = context.get_web();
        var allProperties = web.get_allProperties();
        allProperties.set_item(key, value);
        context.load(web);
        web.update();
        context.executeQueryAsync(def.resolve, def.resolve);
        return def.promise();
    }
    function SetIsConfigured() {
        var def = jQuery.Deferred();
        UpdateWebPropertyBag(Pzl.Config.PROVISIONING_TEMPLATE_STAMPED_KEY, "1").then(def.resolve);
        return def.promise();
    }
    function Reload() {
        window.location.href = window.location.href;
    }
    function GetSiteTemplateConfig(siteTemplate: string) {
        var def = jQuery.Deferred();

        jQuery.getJSON(`${_spPageContextInfo.siteAbsoluteUrl}/SiteTemplates/${siteTemplate}.txt`, (json) => {
            def.resolve(json);
        }).fail(def.reject);

        return def.promise();
    }
    function GetSiteTemplate() {
        var def = jQuery.Deferred();

        GetWebProperties().then(allProperties => {
            var isConfigured = (allProperties[Pzl.Config.PROVISIONING_TEMPLATE_STAMPED_KEY] == "1");
            if (isConfigured) def.resolve(null);
            var siteTemplate = allProperties[Pzl.Config.PROVISIONING_TEMPLATE_KEY];

            GetSiteTemplateConfig(siteTemplate).then(configJson => {
                def.resolve(configJson);
            })
        });

        return def.promise();
    }
    export function SetupSite(siteTemplateConfig) {
        if (siteTemplateConfig == null) { return; }

        SP.SOD.registerSod('pzl.sites.core.min.js', `${_spPageContextInfo.siteAbsoluteUrl}/${Pzl.Config.ASSETS_DIR}/js/pzl.sites.core.min.js`);
        EnsureScriptFunc('pzl.sites.core.min.js', null, () => {
            Pzl.Sites.Core.init(siteTemplateConfig, setupConfig).then(() => {
                SetIsConfigured().then(() => Reload());
            })
        });
    }
    export function AttemptConfiguration() {
        GetSiteTemplate().done(siteTemplate => {
            SetupSite(siteTemplate);
        }).fail(() => {
            console.error("The provided template is invalid.");
        })
    }
}
(() => {
    NFDASD.Workspace.Setup.AttemptConfiguration();
})();
