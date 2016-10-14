angular.module('findoo').controller('ContactsController',function ($scope,$state){
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
  });