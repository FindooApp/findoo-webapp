'use strict';

angular.module('findoo')
.constant("rootURL", window.location.protocol+"//"+window.location.host+"/")
.constant("baseURL", window.location.protocol+"//"+window.location.host+"/api/")
.factory('$localStorage', function ($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    }
})

.factory('SearchFactory', function($resource, baseURL) {
    return $resource(baseURL + "search");
})

.factory('AuthFactory', function($resource, $http, $localStorage, $rootScope, $window, baseURL, toastr){

    var authFac = {};
    var TOKEN_KEY = 'Findoo_TOKEN';
    var isAuthenticated = false;
    var fullname = '';
    var username = '';
    var email = '';
    var authToken = undefined;


  function loadUserCredentials() {
    var credentials = $localStorage.getObject(TOKEN_KEY,'{}');
    if (credentials.username != undefined) {
      useCredentials(credentials);
    }
  }

  function storeUserCredentials(credentials) {
    $localStorage.storeObject(TOKEN_KEY, credentials);
    useCredentials(credentials);
  }

  function useCredentials(credentials) {
    isAuthenticated = true;
    username = credentials.username;
    fullname = credentials.fullname;
    email = credentials.email;
    authToken = credentials.token;

    // Set the token as header for your requests!
    $http.defaults.headers.common['x-access-token'] = authToken;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['x-access-token'] = authToken;
    $localStorage.remove(TOKEN_KEY);
  }

    authFac.login = function(loginData) {

        $resource(baseURL + "users/login")
        .save(loginData,
           function(response) {
              var uinfo = {
                username: loginData.username,
                fullname: response.firstname + ' ' + response.lastname,
                email: response.email,
                token: response.token
              };
              storeUserCredentials(uinfo);
              if(loginData.API_KEY) {
                if($window.opener != null && !$window.opener.closed) {
                  $window.opener.userinfo = uinfo;
                }
                $window.close();
              } else {
                $rootScope.$broadcast('login:Successful');
              }
           },
           function(response){
              isAuthenticated = false;
              var message = response.data.err.message;
              toastr.error(message, 'Login Unsuccessful');
           }

        );

    };

    authFac.logout = function() {
        $resource(baseURL + "users/logout").get();
        destroyUserCredentials();
    };

    authFac.register = function(registerData) {

        $resource(baseURL + "users/register")
        .save(registerData,
           function(response) {
              toastr.success(response.status, 'Registration successful');
              // authFac.login({username:registerData.username, password:registerData.password});
              // if (registerData.rememberMe) {
              //     $localStorage.storeObject('userinfo',
              //         {username:registerData.username, password:registerData.password});
              // }

              //$rootScope.$broadcast('registration:Successful');
           },
           function(response){
               var message = response.data.err.message;
               toastr.error(message, 'Registration Unsuccessful');
           }

        );
    };

    authFac.isAuthenticated = function() {
        return isAuthenticated;
    };

    authFac.getUserInfo = function() {
        return {
          fullname: fullname,
          username: username,
          email: email
        };
    };

    loadUserCredentials();

    return authFac;

});
