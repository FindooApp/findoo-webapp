angular.module('findoo').controller('ContactsController',function ($scope,$state,$rootScope){
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