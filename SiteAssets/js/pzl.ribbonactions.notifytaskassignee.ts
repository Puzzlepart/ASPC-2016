/// <reference path="../../typings/tsd.d.ts" />

module Pzl.RibbonActions.NotifyTaskAssignee {
    function PushToPebble(title: string, message: string) {
        var data = { "token": "JZgDMAVbRyq25PGcrVfmlzfzIBgWzc", "user": "hVRyZ8yijtWmTgoK4kDd6OqQ3j3dLr", "title": title, "message": message };
        jQuery.ajax({ 
            "url": 'https://api.pushover.net/1/messages.json', 
            "content-type": 'application/x-www-form-urlencoded', 
            "data": data, 
            "type": 'post'
        });
    }
    function GetSelectedTasks(successCallback: Function, errorCallback?: any) {
        var clientContext = SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var taskList = web.get_lists().getById(SP.ListOperation.Selection.getSelectedList());
        var selectedItems = SP.ListOperation.Selection.getSelectedItems(clientContext);
        var items = [];
        selectedItems.forEach((itm, index) => {
            items.push(taskList.getItemById(itm.id));
            clientContext.load(items[index]);
        });
        clientContext.executeQueryAsync(() => {
            successCallback(items);
        }, errorCallback);
    }
    export function init() {
        GetSelectedTasks((tasks) => {
            tasks.forEach(t => {
                var taskName = t.get_item("Title");
                PushToPebble("Nag", `${taskName} needs some work.`);
            });
        }, () => {
            
        });
    }
}
