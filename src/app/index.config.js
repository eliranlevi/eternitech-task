(function() {
  'use strict';

  angular
    .module('eternitechTask')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    
    $translateProvider.translations('en', {
        'Photos': 'Photos',
        'Size': 'Size',
        'Modified': 'Modified',
        'Search': 'Search',
        'Files': 'Files',
        'Sharing': 'Sharing',
        'Events': 'Events',
        'GetStarted': 'Get Started',
        'CompanyName': 'EternitechBox',
        'Name': 'Name'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

  }

})();
