(function() {
  'use strict';

  angular
    .module('findoo', ['ngAnimate', 'ngMaterial', 'ui.tinymce', 'ngCookies', 'ngResource', 'vcRecaptcha', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'toastr', 'chart.js', 'daterangepicker'])
    .directive('autofocus', autofocus);

	function autofocus($timeout) {
		return {
			restrict: 'A',
			link : function($scope, $element) {
				$timeout(function() {
					$element[0].focus();
				});
			}
		}
	}

})();
