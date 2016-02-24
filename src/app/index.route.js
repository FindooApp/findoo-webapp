(function() {
  'use strict';

  angular
    .module('findoo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/home.html',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('account', {
        url: '/account',
        templateUrl: 'app/views/account/account.html',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('search', {
        url: '/search',
        templateUrl: 'app/views/main/main.html',
        controller:'MainController',
        controllerAs:'mainMdl'
      })
      .state('search.apps',{
        url:'/apps',
        templateUrl: 'app/views/main/apps/apps.html'
      }).state('search.apps.list',{
        url:'/list',
        templateUrl: 'app/views/main/apps/list/list.html'
      })
      .state('search.apps.map',{
        url:'/map',
        templateUrl: 'app/views/main/apps/map/map.html'
      })
      .state('search.apps.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/apps/detail/detail.html'
      })
      
      .state('search.activities',{
        url:'/activities',
        templateUrl: 'app/views/main/activities/activities.html'
      }).state('search.activities.list',{
        url:'/list',
        templateUrl: 'app/views/main/activities/list/list.html'
      })
      .state('search.activities.map',{
        url:'/activities',
        templateUrl: 'app/views/main/activities/map/map.html'
      })
      .state('search.activities.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/activities/detail/detail.html'
      })
      
      .state('search.catalog',{
        url:'/catalog',
        templateUrl: 'app/views/main/catalog/catalog.html'
      }).state('search.catalog.list',{
        url:'/list',
        templateUrl: 'app/views/main/catalog/list/list.html'
      })
      .state('search.catalog.map',{
        url:'/catalog',
        templateUrl: 'app/views/main/catalog/map/map.html'
      })
      .state('search.catalog.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/catalog/detail/detail.html'
      })
    
    
      .state('search.events',{
        url:'/events',
        templateUrl: 'app/views/main/events/events.html'
      }).state('search.events.list',{
        url:'/list',
        templateUrl: 'app/views/main/events/list/list.html'
      })
      .state('search.events.map',{
        url:'/map',
        templateUrl: 'app/views/main/events/map/map.html'
      })
      .state('search.events.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/events/detail/detail.html'
      })
      .state('search.jobs',{
        url:'/jobs',
        templateUrl: 'app/views/main/jobs/jobs.html'
      }).state('search.jobs.list',{
        url:'/list',
        templateUrl: 'app/views/main/jobs/list/list.html'
      })
      .state('search.jobs.map',{
        url:'/map',
        templateUrl: 'app/views/main/jobs/map/map.html'
      })
      .state('search.jobs.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/jobs/detail/detail.html'
      })
      .state('search.posts',{
        url:'/posts',
        templateUrl: 'app/views/main/posts/posts.html'
      }).state('search.posts.list',{
        url:'/list',
        templateUrl: 'app/views/main/posts/list/list.html'
      })
      .state('search.posts.map',{
        url:'/map',
        templateUrl: 'app/views/main/posts/map/map.html'
      })
      .state('search.posts.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/posts/detail/detail.html'
      })
      .state('search.products',{
        url:'/products',
        templateUrl: 'app/views/main/products/products.html'
      }).state('search.products.list',{
        url:'/list',
        templateUrl: 'app/views/main/products/list/list.html'
      })
      .state('search.products.map',{
        url:'/map',
        templateUrl: 'app/views/main/products/map/map.html'
      })
      .state('search.products.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/products/detail/detail.html'
      })
      .state('search.profiles',{
        url:'/profiles',
        templateUrl: 'app/views/main/profiles/profiles.html'
      }).state('search.profiles.list',{
        url:'/list',
        templateUrl: 'app/views/main/profiles/list/list.html'
      })
      .state('search.profiles.map',{
        url:'/map',
        templateUrl: 'app/views/main/profiles/map/map.html'
      })
      .state('search.profiles.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/profiles/detail/detail.html'
      })
      .state('search.profiles.user',{
        url:'/user',
        templateUrl: 'app/views/main/profiles/user/user.html'
      })
      .state('search.resources',{
        url:'/resources',
        templateUrl: 'app/views/main/resources/resources.html'
      }).state('search.resources.list',{
        url:'/list',
        templateUrl: 'app/views/main/resources/list/list.html'
      })
      .state('search.resources.map',{
        url:'/map',
        templateUrl: 'app/views/main/resources/map/map.html'
      })
      .state('search.resources.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/resources/detail/detail.html'
      })
      .state('search.services',{
        url:'/services',
        templateUrl: 'app/views/main/services/services.html'
      }).state('search.services.list',{
        url:'/list',
        templateUrl: 'app/views/main/services/list/list.html'
      })
      .state('search.services.map',{
        url:'/map',
        templateUrl: 'app/views/main/services/map/map.html'
      })
      .state('search.services.detail',{
        url:'/detail',
        templateUrl: 'app/views/main/services/detail/detail.html'
      });





    $urlRouterProvider.otherwise('/');
  }

})();
