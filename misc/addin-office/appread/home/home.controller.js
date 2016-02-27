(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', homeController);

  /**
   * Controller constructor
   */
  function homeController($http,$log){
    var vm = this;  // jshint ignore:line
    vm.title = 'Shieet';
    var userId = Office.context.mailbox.item.from.emailAddress.split('@')[0];
    vm.dataObject = {};

    //getDataFromService();

    var request = {
            url: 'https://gateway.marvel.com/v1/public/characters/'+userId+'?apikey=326b9124ce39cf26bf0c3746d03d5e73&hash=9921fd504791b84506e01303bb73edbe&ts=1',
            method: 'GET'
        }
        $http(request).then(function(response){
            $log.debug(response);
            if(response.data !== null){
                vm.data = response.data;
            }
        },function(error){
            $log.debug(error);
        })
  }

})();
