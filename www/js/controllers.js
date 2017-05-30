angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $state) {
  $scope.start = function(){
    $rootScope.data = {};
    $state.go('tab.personal');
  }
})

.controller('PersonalCtrl', function($scope, $rootScope, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    $scope.personal = $rootScope.data.personal==undefined?{}:$rootScope.data.personal;  
  });
  
  $scope.next = function(){
    $rootScope.data.personal = $scope.personal;
    $state.go('tab.land');
  };
})

.controller('LandCtrl', function($scope, $rootScope, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.$on('$ionicView.enter', function(e) {
    console.log($scope.land);
    console.log($rootScope.data.land);
    $scope.land = $rootScope.data.land==undefined?undefined:$rootScope.data.land;
    $scope.land = {};
  });
  $scope.back = function(){
    $rootScope.data.land = $scope.land;
    $state.go('tab.personal');
  };
  $scope.next = function(){
    $rootScope.data.land = $scope.land;
    $state.go('tab.fertility');
  };
})

.controller('FertilityCtrl', function($scope, $rootScope, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    $rootScope.data = $rootScope.data==undefined?{}:$rootScope.data;
    $scope.fertility = $rootScope.data.fertility==undefined?{}:$rootScope.data.fertility;
  });
  $scope.back = function(){
    $rootScope.data.fertility = $scope.fertility;
    $state.go('tab.land');
  };
  $scope.next = function(){
    $rootScope.data.fertility = $scope.fertility;
    $state.go('tab.sowing');
  };
})

.controller('SowingCtrl', function($scope, $rootScope, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    $rootScope.data = $rootScope.data==undefined?{}:$rootScope.data;
    $scope.sowing = $rootScope.data.sowing==undefined?{}:$rootScope.data.sowing;
  });
  $scope.back = function(){
    $rootScope.data.sowing = $scope.sowing;
    $state.go('tab.fertility');
  };
  $scope.next = function(){
    $rootScope.data.sowing = $scope.sowing;
    $state.go('tab.water');
  };
})

.controller('WaterCtrl', function($scope, $rootScope, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    $rootScope.data = $rootScope.data==undefined?{}:$rootScope.data;
    $scope.water = $rootScope.data.water==undefined?{}:$rootScope.data.water;
  });
  $scope.back = function(){
    $rootScope.data.water = $scope.water;
    $state.go('tab.sowing');
  };
  $scope.next = function(){
    $rootScope.data.water = $scope.water;
    $state.go('tab.climate');
  };
})

.controller('ClimateCtrl', function($scope, $rootScope, $state, $http) {
  $scope.$on('$ionicView.enter', function(e) {
    $rootScope.data = $rootScope.data==undefined?{}:$rootScope.data;
    $scope.climate = $rootScope.data.climate==undefined?{}:$rootScope.data.climate;
  });
  $scope.back = function(){
    $rootScope.data.climate = $scope.climate;
    $state.go('tab.sowing');
  };
  $scope.submit = function(){
    $rootScope.data.climate = $scope.climate;
    $http.post('example.com', $rootScope.data).success(function(result){
      console.log(result);
      $state.go('tab.end');
    }).error(function(result){
      $state.go('tab.end');
      alert("Unable to send data");
    });
    console.log(JSON.stringify($rootScope.data));
  };
})

.controller('EndCtrl', function($scope, $rootScope, $state) {
  $scope.start = function(){
    $rootScope.data = undefined;
    $state.go('tab.home');
  };
});
