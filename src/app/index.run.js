(function() {
  'use strict';

  angular
    .module('demoWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
