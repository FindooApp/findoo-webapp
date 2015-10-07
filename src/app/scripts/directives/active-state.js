(function(){
  angular.module('findoo').directive("activeState", activeState);
  /** @ngInject */
  function activeState($state){
    return {
      scope:false,
      restrict:"A",
      link:function(scope,elem,attrs){
        function check(){
          if($state.current.name.indexOf(attrs.activeState)==0){
            elem.addClass(attrs.activeClass || "active");
          }else{
            elem.removeClass(attrs.activeClass || "active");
          }
        }

        if(attrs.activeState){
          check();
          scope.$on("$stateChangeSuccess",check);
        }

      }
    }
  }
})();



