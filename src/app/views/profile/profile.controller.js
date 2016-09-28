angular.module('findoo').controller('ProfileController',
  /** ngInject */
  function ($scope,$state){
    $scope.show_noti = false;
    $scope.sidebarAccor1 = true;
    $scope.sidebarAccor2 = true;
    $scope.sidebarAccor3 = true;
    $scope.sidebarAccor4 = true;
    var vm = this;
    vm.gotTo = function(name){
      var parts=$state.current.name.split(".");
      parts.pop();
      parts.push(name);
      $state.go(parts.join('.'));
    }
    $scope.showNav = true;
    $scope.notiShow = function() {
      $scope.show_noti = !$scope.show_noti;
    }
  }
);
