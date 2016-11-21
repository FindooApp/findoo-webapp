'use strict';

angular.module('findoo').controller('ResetController',
  /** ngInject */
  function ($scope, $state, $http, rootURL, baseURL, toastr, $rootScope, $location){

      /* forgot submittion handling */
      $scope.forgot={};
      $scope.reset = {};

      $scope.doResetPassword = function() {
      	$http.post(
      		baseURL + "users/forgot",
      		$scope.forgot
  	    )
  	    .then(
  	    	function(response) {
  	    		toastr.success(response.data.message, 'Success!');
          },
           function(response){
              var message = response.data.err.message;
              toastr.error(message, 'Error!');
           }
  	    );
      };

      $scope.doReset = function() {
        $http.post(
          baseURL + "verify/reset",
          {reset_token: $state.params.token, info: $scope.reset}
        )
        .then(
          function(response) {
            toastr.success(response.data.message, 'Success!');
          },
           function(response){
              var message = response.data.err.message;
              toastr.error(message, 'Error!');
           }
        );
      };
});