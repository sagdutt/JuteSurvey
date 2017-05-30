// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('tab.personal', {
    url: '/personal',
    views: {
      'tab-personal': {
        templateUrl: 'templates/tab-personal.html',
        controller: 'PersonalCtrl'
      }
    }
  })

  .state('tab.land', {
      url: '/land',
      views: {
        'tab-land': {
          templateUrl: 'templates/tab-land.html',
          controller: 'LandCtrl'
        }
      }
    })

  .state('tab.fertility', {
      url: '/fertility',
      views: {
        'tab-fertility': {
          templateUrl: 'templates/tab-fertility.html',
          controller: 'FertilityCtrl'
        }
      }
    })

    .state('tab.climate', {
      url: '/climate',
      views: {
        'tab-climate': {
          templateUrl: 'templates/tab-climate.html',
          controller: 'ClimateCtrl'
        }
      }
    })

  .state('tab.sowing', {
    url: '/sowing',
    views: {
      'tab-sowing': {
        templateUrl: 'templates/tab-sowing.html',
        controller: 'SowingCtrl'
      }
    }
  })

  .state('tab.water', {
    url: '/water',
    views: {
      'tab-water': {
        templateUrl: 'templates/tab-water.html',
        controller: 'WaterCtrl'
      }
    }
  })

  .state('tab.end', {
    url: '/end',
    views: {
      'tab-end':{
        templateUrl: 'templates/tab-end.html',
        controller: 'EndCtrl'
      }
    }    
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
