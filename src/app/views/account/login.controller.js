'use strict';

angular.module('findoo').controller('LoginController',
  function ($scope, $state, baseURL, toastr, $http, $localStorage, AuthFactory){

      if($state.current.name === "verify" && $state.params.token){

            $http.post(
                baseURL + "verify",
                {reset_token: $state.params.token}
              )
              .then(
                function(response) {
                  toastr.success(response.message, 'Success!');
                },
                 function(response){
                    var message = response.data.err.message;
                    toastr.error(message, 'Error!');
                 }
              );
      }

      /* Login submission handling */
      $scope.loginData = $localStorage.getObject('userinfo','{}');

      $scope.doLogin = function() {
          if($scope.rememberMe) {
             $localStorage.storeObject('userinfo',$scope.loginData);
          }
          if($state.params.API_KEY) {
          	$scope.loginData.API_KEY = $state.params.API_KEY;
          }

          AuthFactory.login($scope.loginData);

      };
});
