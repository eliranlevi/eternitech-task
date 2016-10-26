(function() {
    'use strict';
    
    angular
      .module('eternitechTask')
      .factory('ImagesService', ImagesService);

    /** @ngInject */
    function ImagesService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            return $http.get('/images.json').then(function(resp) { return resp.data; });
        }
    }

})();