'use strict';

angular.module('findoo').controller('RegisterController',
  /** ngInject */
  function ($scope, AuthFactory){

      /* Registration submittion handling */
      $scope.register={};
      $scope.loginData={};

      $scope.doRegister = function() {
          AuthFactory.register($scope.registration);
      };
});
