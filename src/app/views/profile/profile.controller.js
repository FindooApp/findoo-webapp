angular.module('findoo').controller('ProfileController', function ($scope,$state){
    $scope.show_profile = false;
    $scope.show_other_links = false;
    $scope.sidebarAccor1 = true;
    $scope.sidebarAccor2 = true;
    $scope.sidebarAccor3 = true;
    $scope.sidebarAccor4 = true;
    $scope.editMode = false;
    $scope.editId = false;
    $scope.editEmail = false;
    $scope.editPass = false;
    $scope.editNo = false;
    $scope.editConnect = false;
    $scope.editStat = false;
    $scope.editLanguage = false;
    $scope.show_camera = false;
    $scope.show_cover_image = false;
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
        $scope.show_other_links = false;
    }
    $scope.showOtherLinks = function(){
        $scope.show_other_links = !$scope.show_other_links;
        $scope.show_profile = false;
    }
    $scope.edit = function() {
      $scope.editMode = !$scope.editMode;
    }
    $scope.save = function() {
      $scope.editMode = false;
    }
    $scope.cancel = function() {
      $scope.editMode = false;
    }

    $scope.editUserId = function() {
      $scope.editId = !$scope.editId;
    }
    $scope.saveId = function() {
      $scope.editId = false;
    }
    $scope.cancelId = function() {
      $scope.editId = false;
    }

    $scope.editEmailId = function() {
      $scope.editEmail = !$scope.editEmail;
    }
    $scope.saveEmail = function() {
      $scope.editEmail = false;
    }
    $scope.cancelEmail = function() {
      $scope.editEmail = false;
    }

    $scope.editPassword = function() {
      $scope.editPass = !$scope.editPass;
    }
    $scope.savePass = function() {
      $scope.editPass = false;
    }
    $scope.cancelPass = function() {
      $scope.editPass = false;
    }

    $scope.editMobileNo = function() {
      $scope.editNo = !$scope.editNo;
    }
    $scope.saveNo = function() {
      $scope.editNo = false;
    }
    $scope.cancelNo = function() {
      $scope.editNo = false;
    }

    $scope.editSocial = function() {
      $scope.editConnect = !$scope.editConnect;
    }
    $scope.saveSocial = function() {
      $scope.editConnect = false;
    }
    $scope.cancelSocial = function() {
      $scope.editConnect = false;
    }

    $scope.editStatus = function() {
      $scope.editStat = !$scope.editStat;
    }
    $scope.saveStatus = function() {
      $scope.editStat = false;
    }
    $scope.cancelStatus = function() {
      $scope.editStat = false;
    }

    $scope.editPrefferedLang = function() {
      $scope.editLanguage = !$scope.editLanguage;
    }
    $scope.saveLang = function() {
      $scope.editLanguage = false;
    }
    $scope.cancelLang = function() {
      $scope.editLanguage = false;
    }
  });
