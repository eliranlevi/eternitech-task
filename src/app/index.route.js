(function() {
  'use strict';

  angular
    .module('eternitechTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('files', {
        url: '/files',
        template: "<h2><strong>{{ 'Files' | translate }}</strong></h2>"
      })
      .state('sharing', {
        url: "/sharing",
        template: "<h2><strong>{{ 'Sharing' | translate }}</strong></h2>"
      })
      .state('events', {
        url: "/events",
        template: "<h2><strong>{{ 'Events' | translate }}</strong></h2>"
      })
      .state('get-started', {
        url: "/get-started",
        template: "<h2><strong>{{ 'GetStarted' | translate }}</strong></h2>"
      });

    $urlRouterProvider.otherwise('/');
  }

})();
