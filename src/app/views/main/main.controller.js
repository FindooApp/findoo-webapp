angular.module('findoo').controller('MainController',function ($scope,$state,$rootScope, SearchFactory, $location, toastr){
    $scope.keyword = $state.params.q;
    $scope.path = $state.current.name.replace(/\./g, '/');

    $scope.show_noti = false;
    $scope.show_message = false;
    $scope.show_profile = false;
    $scope.sidebarAccor1 = true;
    $scope.sidebarAccor2 = true;
    $scope.sidebarAccor3 = true;
    $scope.sidebarAccor4 = true;
    $scope.sidebarAccor5 = true;
    $scope.sidebarAccor6 = true;
    $scope.sidebarAccor7 = true;
    $scope.sidebarAccor8 = true;
    $scope.sidebarAccor9 = true;
    $scope.trackbtn = false;
    $scope.show_enquire_form = false;
    $scope.show_map = false;
    $scope.show_list_view = true;
    $scope.show_review_form = false;
    $scope.default_image = true;
    $rootScope.placeholder = "Search for All...";
    $rootScope.search_select = "All";
    $scope.show_add_form = false;
    $scope.show_import_form = false;
    $scope.show_upload_form = false;
    var vm = this;
    vm.gotTo = function(name){
      var parts=$state.current.name.split(".");
      parts.pop();
      parts.push(name);
      $state.go(parts.join('.'));
    }
    $scope.showNav = true;

    $scope.doSearch = function() {
        if(!$scope.keyword) return;
        $location.path($scope.path).search({q: $scope.keyword});
        SearchFactory.get({
            keyword: $scope.keyword
        })
            .$promise.then(
                function (response) {
                    $scope.profiles = response.profiles;
                },
                function (response) {
                    toastr.error(response.status + " " + response.statusText, 'Error');
                }
            );
    }

    $scope.doSearch();

    $scope.showProfile = function(){
        $scope.show_profile = !$scope.show_profile;
        $scope.show_noti = false;
        $scope.show_message = false;
        $scope.show_other_links = false;
        $scope.show_diary = false;
    }
    $scope.showMessage = function(){
        $scope.show_message = !$scope.show_message;
        $scope.show_noti = false;
        $scope.show_profile = false;
        $scope.show_other_links = false;
        $scope.show_diary = false;
    }
    $scope.showNoti = function(){
        $scope.show_noti = !$scope.show_noti;
        $scope.show_profile = false;
        $scope.show_message = false;
        $scope.show_other_links = false;
        $scope.show_diary = false;
    }
    $scope.showOtherLinks = function(){
        $scope.show_other_links = !$scope.show_other_links;
        $scope.show_profile = false;
        $scope.show_message = false;
        $scope.show_noti = false;
        $scope.show_diary = false;
    }
    $scope.showDiary = function(){
        $scope.show_diary = !$scope.show_diary
        $scope.show_other_links = false;
        $scope.show_profile = false;
        $scope.show_message = false;
        $scope.show_noti = false;
    }
    $scope.track = function() {
        $scope.trackbtn = !$scope.trackbtn;
    }
    $scope.enquire = function() {
        $scope.show_enquire_form = !$scope.show_enquire_form;
        $scope.default_image = false;
    }
    $scope.map = function() {
        $scope.show_map = !$scope.show_map;
        $scope.default_image = false;
    }
    $scope.listView = function() {
        $scope.show_list_view = true;
    }
    $scope.gridView = function() {
        $scope.show_list_view = false;
    }
    $scope.review = function() {
        $scope.show_review_form = !$scope.show_review_form;
        $scope.default_image = false;
    }
    $scope.addLink = function() {
        $scope.isLink = !$scope.isLink;
    }
    $scope.isAddForm = function() {
        $scope.show_add_form = !$scope.show_add_form;
        $scope.show_import_form = false;
        $scope.show_upload_form = false;
    }
    $scope.isImportForm = function() {
        $scope.show_import_form = !$scope.show_import_form;
        $scope.show_add_form = false;
        $scope.show_upload_form = false;
    }
    $scope.isUploadForm = function() {
        $scope.show_upload_form = !$scope.show_upload_form;
        $scope.show_add_form = false;
        $scope.show_import_form = false;
    }
  });

(function () {
    'use strict';

    angular.module('findoo').directive('routeCssClassnames', routeCssClassnames);

    function routeCssClassnames($rootScope) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr, ctrl) {

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                    var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                    // don't do anything if they are the same
                    if (fromClassnames != toClassnames) {
                        if (fromClassnames) {
                            elem.removeClass(fromClassnames);
                        }

                        if (toClassnames) {
                            elem.addClass(toClassnames);
                        }
                    }
                });
            }
        }
    }
}());