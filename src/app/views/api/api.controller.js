'use strict';

angular.module('findoo').controller('APIController',
  /** ngInject */
  function ($scope, $http, rootURL, baseURL, toastr, $rootScope, $location){

  	if(!$rootScope.loggedIn) {
  		$location.path('/account');
  	}

  	$scope.results = {};

  	$http.get(baseURL + "v2")
    .then(
    	function(response) {
    		$scope.results = response.data.results;
       },
       function(response){
          var message = response.data.err.message;
          toastr.error(message, 'Error!');
       }
    );

      /* Registration submittion handling */
      $scope.registration={};

      $scope.doRegister = function() {
      	$http.post(
      		baseURL + "v2/register",
      		$scope.registration
	    )
	    .then(
	    	function(response) {
	    		toastr.success(response.message, 'Success!');
	    		$location.path('api');
           },
           function(response){
              var message = response.data.err.message;
              toastr.error(message, 'Login Unsuccessful');
           }
	    );
      };

      $scope.code = '';

      $scope.showCode = function(api_key) {
      	var url = rootURL + 'account?API_KEY=' + api_key;
      	var button = '&lt;button onclick="showFindooPopup()"&gt;Findoo Signin&lt;/button&gt;';
      	var code = '&lt;script&gt;<br />var win;<br />var userinfo = {};<br />function showFindooPopup () {<br />&nbsp;&nbsp;win = window.open("'+url+'", "Findoo SignIn", "width=780,height=410,toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0,left=800,top=500");<br />&nbsp;&nbsp;win.focus();<br />}<br />&lt;/script&gt;';
      	$scope.code = button + "<br /><br />Place the script at the end of body tag.<br /><br />" + code;
      };
});