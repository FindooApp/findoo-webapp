(function() {
  'use strict';

  angular
    .module('findoo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeController',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('account', {
        url: '/account?API_KEY',
        templateUrl: 'app/views/account/account.html',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('verify', {
        url: '/verify/:token',
        templateUrl: 'app/views/account/account.html',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('reset', {
        url: '/reset/:token',
        templateUrl: 'app/views/account/reset-password.html',
        controller: 'ResetController',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('forgot', {
        url: '/forgot-password',
        templateUrl: 'app/views/account/forgot-password.html',
        controller: 'ResetController',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('api', {
        url: '/api',
        templateUrl: 'app/views/api/view.html',
        controller: 'APIController',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('api_register', {
        url: '/api/register',
        templateUrl: 'app/views/api/generate.html',
        controller: 'APIController',
        data : {
           cssClassnames : 'body-image'
       }
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'app/views/catalog/catalog.html',
        controller: 'CatalogController'
      })
      .state('catalog.browse', {
        url: '/browse',
        templateUrl: 'app/views/catalog/browse-catalog/browse-catalog.html'
      })
      .state('catalog.subcatagory', {
        url: '/browse/subcatagory',
        templateUrl: 'app/views/catalog/browse-catalog/browse-subcatagory.html'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'app/views/main/main.html',
        controller:'MainController',
        controllerAs:'mainMdl'
      })
      .state('search.home',{
        url:'/home?q',
        templateUrl: 'app/views/main/home/home.html',
        controller: 'HomeController',
        controllerAs:'homeMdl'
      })
      .state('search.home.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/home/list/list.html'
      })
      .state('search.home.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/home/detail/detail.html'
      })
      .state('search.apps',{
        url:'/apps?q',
        templateUrl: 'app/views/main/apps/apps.html',
        controller: 'AppsController',
        controllerAs:'appsMdl'
      })
      .state('search.apps.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/apps/list/list.html'
      })
      .state('search.apps.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/apps/map/map.html'
      })
      .state('search.apps.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/apps/detail/detail.html'
      })
      .state('search.activities',{
        url:'/activities?q',
        templateUrl: 'app/views/main/activities/activities.html'
      })
      .state('search.activities.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/activities/list/list.html'
      })
      .state('search.activities.map',{
        url:'/activities?q',
        templateUrl: 'app/views/main/activities/map/map.html'
      })
      .state('search.activities.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/activities/detail/detail.html'
      })
      .state('search.catalog',{
        url:'/catalog?q',
        templateUrl: 'app/views/main/catalog/catalog.html'
      })
      .state('search.catalog.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/catalog/list/list.html'
      })
      .state('search.catalog.map',{
        url:'/catalog?q',
        templateUrl: 'app/views/main/catalog/map/map.html'
      })
      .state('search.catalog.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/catalog/detail/detail.html'
      })
      .state('search.events',{
        url:'/events?q',
        templateUrl: 'app/views/main/events/events.html',
        controller: 'EventsController',
        controllerAs:'eventsMdl'
      })
      .state('search.events.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/events/list/list.html'
      })
      .state('search.events.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/events/map/map.html'
      })
      .state('search.events.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/events/detail/detail.html'
      })
      .state('search.jobs',{
        url:'/jobs?q',
        templateUrl: 'app/views/main/jobs/jobs.html',
        controller: 'JobsController',
        controllerAs:'jobsMdl'
      })
      .state('search.jobs.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/jobs/list/list.html'
      })
      .state('search.jobs.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/jobs/map/map.html'
      })
      .state('search.jobs.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/jobs/detail/detail.html'
      })
      .state('search.posts',{
        url:'/posts?q',
        templateUrl: 'app/views/main/posts/posts.html',
        controller: 'PostsController',
        controllerAs:'postsMdl'
      })
      .state('search.posts.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/posts/list/list.html'
      })
      .state('search.posts.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/posts/map/map.html'
      })
      .state('search.posts.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/posts/detail/detail.html'
      })
      .state('search.requirements',{
        url:'/requirements?q',
        templateUrl: 'app/views/main/posts/posts.html',
        controller: 'RequirementsController',
        controllerAs:'requirementsMdl'
      })
      .state('search.requirements.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/requirements/list/list.html'
      })
      .state('search.products',{
        url:'/products?q',
        templateUrl: 'app/views/main/products/products.html',
        controller: 'ProductsController',
        controllerAs:'productsMdl'
      })
      .state('search.products.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/products/list/list.html'
      })
      .state('search.products.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/products/map/map.html'
      })
      .state('search.products.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/products/detail/detail.html'
      })
      .state('search.profiles',{
        url:'/profiles?q',
        templateUrl: 'app/views/main/profiles/profiles.html',
        controller: 'ProfilesController',
        controllerAs:'profilesMdl'
      })
      .state('search.profiles.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/profiles/list/list.html'
      })
      .state('search.profiles.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/profiles/map/map.html'
      })
      .state('search.profiles.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/profiles/detail/detail.html'
      })
      .state('search.resources',{
        url:'/resources?q',
        templateUrl: 'app/views/main/resources/resources.html',
        controller: 'ResourcesController',
        controllerAs:'resourcesMdl'
      })
      .state('search.resources.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/resources/list/list.html'
      })
      .state('search.resources.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/resources/map/map.html'
      })
      .state('search.resources.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/resources/detail/detail.html'
      })
      .state('search.services',{
        url:'/services?q',
        templateUrl: 'app/views/main/services/services.html',
        controller: 'ServicesController',
        controllerAs:'servicesMdl'
      })
      .state('search.services.list',{
        url:'/list?q',
        templateUrl: 'app/views/main/services/list/list.html'
      })
      .state('search.services.map',{
        url:'/map?q',
        templateUrl: 'app/views/main/services/map/map.html'
      })
      .state('search.services.detail',{
        url:'/detail?q',
        templateUrl: 'app/views/main/services/detail/detail.html'
      })
      .state('myprofile', {
        url: '/myprofile',
        templateUrl: 'app/views/profile/profile.html',
        controller: 'ProfileController'
      })
      .state('myprofile.detail',{
        url:'/detail',
        templateUrl: 'app/views/profile/detail/detail.html'
      })
      .state('myprofile.user',{
        url:'/user',
        templateUrl: 'app/views/profile/user/user.html'
      })
      .state('myprofile.entity',{
        url:'/entity',
        templateUrl: 'app/views/profile/entity/entity.html'
      })
      .state('myprofile.extention',{
        url:'/extention',
        templateUrl: 'app/views/profile/extention/extention.html'
      })
      .state('myprofile.settings',{
        url:'/settings',
        templateUrl: 'app/views/profile/settings/settings.html'
      })
      .state('notification',{
        url:'/notification',
        templateUrl: 'app/views/notification/notification.html',
        controller: 'NotificationController'
      })
      .state('notification.list',{
        url:'/list',
        templateUrl: 'app/views/notification/list/list.html'
      })
      .state('message',{
        url:'/message',
        templateUrl: 'app/views/message/message.html',
        controller: 'MessageController'
      })
      .state('message.list',{
        url:'/list',
        templateUrl: 'app/views/message/list/list.html'
      })
      .state('message.add-group',{
        url:'/add/group',
        templateUrl: 'app/views/message/add-group/add-group.html'
      })
      .state('message.add-list',{
        url:'/add/list',
        templateUrl: 'app/views/message/add-list/add-list.html'
      })
      .state('contacts',{
        url:'/contacts',
        templateUrl: 'app/views/contacts/contacts.html',
        controller: 'ContactsController'
      })
      .state('contacts.contact',{
        url:'/contact',
        templateUrl: 'app/views/contacts/contact/contact.html'
      })
      .state('contacts.list',{
        url:'/list',
        templateUrl: 'app/views/contacts/list/list.html'
      })
      .state('contacts.groups',{
        url:'/groups',
        templateUrl: 'app/views/contacts/groups/groups.html'
      })
      .state('/404', {
          templateUrl: 'app/views/404.html'
      });

      $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        $state.go('/404', null, {
          location: false
        });
      });

      $locationProvider.html5Mode(true);
  }

})();
