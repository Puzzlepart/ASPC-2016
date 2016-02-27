(function(){
  'use strict';

  // create
  var officeAddin = angular.module('officeAddin', [
    'ngRoute',
    'ngSanitize',
    'AdalAngular'
  ]);

  // configure
  officeAddin.config(['$logProvider', function($logProvider){
    // set debug logging to on
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }]);

  // when Office has initalized, manually bootstrap the app
//   Office.initialize = function(){
//     console.log('>>> Office.initialize()');
//     angular.bootstrap(document.getElementById('container'), ['officeAddin']);
//   };
if (location.href.indexOf('access_token=') < 0) {
    Office.initialize = function () {
        console.log(">>> Office.initialize()");
        angular.bootstrap(document.getElementById('container'), ['officeAddin']);
    };
}
else {
  angular.bootstrap(document.getElementById('container'), ['officeAddin']);
}


})();

