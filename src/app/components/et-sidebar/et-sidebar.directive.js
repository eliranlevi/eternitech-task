(function() {
    'use strict';

    angular
        .module('eternitechTask')
        .directive('etSidebar', etSidebar);

    /* @ngInject */
    function etSidebar() {
        var directive = {
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: 'app/components/et-sidebar/et-sidebar.html',
            scope: {}
        };

        return directive;
    }
})();