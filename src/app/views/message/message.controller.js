angular.module('findoo').controller('MessageController',function ($scope,$state,$rootScope){
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
    $scope.show_add_group = false;
    $scope.show_compose = false;
    $scope.show_msg_options = false;
    $scope.direct_msg = true;
    $scope.list_msg = false;
    $scope.group_msg = false;
    $scope.direct_msg_popup = false;
    $scope.list_msg_popup = false;
    $scope.group_msg_popup = false;
    $scope.show_contact_setting = false;
    $scope.show_search_option = false;
    $scope.user_status = false;
    $scope.show_step_1 = true;
    $scope.show_step_2 = false;
    $scope.show_step_3 = false;
    $scope.step_btn = true;
    $scope.step_btn_2 = true;
    $rootScope.placeholder = "Search for All...";
    $rootScope.search_select = "All";
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
    $scope.showAddGroup = function() {
        $scope.show_add_group = !$scope.show_add_group;
    }
    $scope.compose = function() {
        $scope.show_compose = !$scope.show_compose;
    }
    $scope.msgOptions = function() {
        $scope.show_msg_options = !$scope.show_msg_options;
    }
    $scope.direct = function() {
        $scope.direct_msg_popup = !$scope.direct_msg_popup;
        $scope.direct_msg = true;
        $scope.list_msg = false;
        $scope.list_msg_popup = false;
        $scope.group_msg = false;
        $scope.group_msg_popup = false;
    }
    $scope.list = function() {
        $scope.list_msg_popup = !$scope.list_msg_popup;
        $scope.list_msg = true;
        $scope.group_msg = false;
        $scope.group_msg_popup = false;
        $scope.direct_msg = false;
        $scope.direct_msg_popup = false;
    }
    $scope.group = function() {
        $scope.group_msg_popup = !$scope.group_msg_popup;
        $scope.group_msg = true;
        $scope.direct_msg = false;
        $scope.direct_msg_popup = false;
        $scope.list_msg = false;
        $scope.list_msg_popup = false;
    }
    $scope.contactSetting = function() {
        $scope.show_contact_setting = !$scope.show_contact_setting;
    }
    $scope.searchOption = function() {
        $scope.show_search_option = !$scope.show_search_option;
    }
    $scope.userStatus = function() {
        $scope.user_status = !$scope.user_status;
    }
    $scope.nextStep1 = function() {
        $scope.show_step_1 = true;
        $scope.show_steps = true;
        $scope.show_step_2 = true;
        $scope.show_step_3 = false;
        $scope.show_step_4 = false;
        $scope.step_btn = false;
    }
    $scope.nextStep2 = function() {
        $scope.show_step_1 = true;
        $scope.show_steps = true;
        $scope.show_step_2 = true;
        $scope.show_step_3 = true;
        $scope.show_step_4 = false;
        $scope.step_btn_2 = false;
    }
    $scope.nextStep3 = function() {
        $scope.show_step_1 = false;
        $scope.show_steps = true;
        $scope.show_step_2 = false;
        $scope.show_step_3 = false;
        $scope.show_step_4 = true;
    }
  });