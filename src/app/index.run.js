(function() {
  'use strict';

  angular
    .module('findoo')
    .run(runConf);

  function runConf($rootScope, AuthFactory, $location) {
      $rootScope.loggedIn = false;

      if(AuthFactory.isAuthenticated()) {
          $rootScope.loggedIn = true;
          $rootScope.userInfo = AuthFactory.getUserInfo();
      }

      $rootScope.logOut = function() {
          AuthFactory.logout();
          $rootScope.loggedIn = false;
          $rootScope.userInfo = '';
          $location.path('/account');
      };

      $rootScope.$on('login:Successful', function () {
          $rootScope.loggedIn = AuthFactory.isAuthenticated();
          $rootScope.userInfo = AuthFactory.getUserInfo();
          $location.path('/search/profiles/list');

      });

      $rootScope.$on('registration:Successful', function () {
          $rootScope.loggedIn = AuthFactory.isAuthenticated();
          $rootScope.userInfo = AuthFactory.getUserInfo();
          $location.path('/search/profiles/list');
      });
  }

})();
