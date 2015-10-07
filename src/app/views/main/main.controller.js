angular.module('findoo').controller('MainController',
  /** ngInject */
  function ($scope,$state){
    var vm = this;
    vm.gotTo = function(name){
      var parts=$state.current.name.split(".");
      parts.pop();
      parts.push(name);
      $state.go(parts.join('.'));
    }
  }
);
