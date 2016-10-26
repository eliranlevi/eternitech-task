(function() {
  'use strict';

  angular
    .module('eternitechTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ImagesService) {
    var vm = this;

    vm.images = [];
    vm.setOrder = setOrder;

    activate();

    function activate() {
      ImagesService.getData().then(function(resp) {
        vm.images = resp.images;
      });
    }

    function setOrder(order) {
      vm.order = order;
    }
  }

})();
