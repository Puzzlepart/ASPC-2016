/// <reference path="..\..\..\typings\tsd.d.ts" />
/// <reference path="nfdasd.config.ts" />
/// <reference path="nfdasd.utilities.ts" />

module NFDASD.Workspace {
    function SyncPermissionGroups() {
        jQuery.when.apply(jQuery, [Utilities.GetAllWebProperties(), Utilities.GetWelcomePageProperties()]).then((webProps, welcomePageProps) => {
                if(!webProps.hasOwnProperty("_Sync_PermissionGroups") || webProps._Sync_PermissionGroups == 1) return;                
                const clientContext = SP.ClientContext.get_current();
                const web = clientContext.get_web();
                clientContext.load(web, 'HasUniqueRoleAssignments');
                clientContext.executeQueryAsync(() => {
                    if(!web.get_hasUniqueRoleAssignments()) return;
                    if(!webProps.hasOwnProperty("vti_associateownergroup") || !webProps.hasOwnProperty("vti_associatemembergroup")) {
                        Utilities.UserMessage(`Kan ikke synkronisere gruppemedlemskap uten at grupper er satt opp. Sett opp grupper <a href="${_spPageContextInfo.webAbsoluteUrl}/_layouts/15/permsetup.aspx">her</a>.`, 'red');
                        return;
                    }
                    var membersGroup = web.get_associatedMemberGroup();
                    var ownersGroup = web.get_associatedOwnerGroup();
                    
                    Utilities.GetWelcomePageProperties().then((wpProps:any) => {
                        if(welcomePageProps.ASFDMembersId) {
                            welcomePageProps.ASFDMembersId.results.forEach(userId => {
                                membersGroup.get_users().addUser(web.getUserById(userId));
                            })
                        }
                        if(welcomePageProps.ASFDResponsibleUser1Id) {
                            ownersGroup.get_users().addUser(web.getUserById(welcomePageProps.ASFDResponsibleUser1Id));
                        }
                        if(welcomePageProps.ASFDResponsibleUser2Id) {
                            ownersGroup.get_users().addUser(web.getUserById(welcomePageProps.ASFDResponsibleUser2Id));
                        }
                        
                        clientContext.executeQueryAsync(() => {
                            Utilities.SetWebPropertyValue('_Sync_PermissionGroups', '1').done(() => {
                                Utilities.UserMessage('Gruppemedlemskap er synkronisert', 'green');
                            }).fail(() => {
                                Utilities.UserMessage('Det skjedde en feil ved synkronisering av gruppemedlemskap', 'red');
                            });
                        }, () => {
                            Utilities.UserMessage('Det skjedde en feil ved synkronisering av gruppemedlemskap', 'red');
                        });
                    });
                });
        });
    }
    export function Initialize() {
        SyncPermissionGroups();
    }
}
ExecuteOrDelayUntilBodyLoaded(NFDASD.Workspace.Initialize);