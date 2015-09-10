angular.module('starter')
.controller('CardsCtrl', function ($scope, FavoritesService, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate) {
  console.log('CARDS CTRL');
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.cards = [];

  addCats = function(){
    if ($scope.cards.length < 1){
      $ionicLoading.show();
    }
    $http.get('https://randomuser.me/api/?results=20').success(function (response) {
      $scope.cards.unshift.apply($scope.cards, response.results);
      $ionicLoading.hide();
    }).error(function (err) {
      console.log(err);
    });
  };

  addCats();

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    if ($scope.cards.length < 15) {
      addCats();
    }
  };

  $scope.yesCard = function(index) {
    FavoritesService.yesCats.push(index);
    $scope.cardDestroyed(index);
    console.log('YES');
  };

  $scope.noCard = function(index) {
    $scope.cardDestroyed(index);
    console.log('NO');
  };
  $scope.toggleLeft = function() {
  $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
  };
  $scope.cardSwipedRight = function(index) {
    FavoritesService.yesCats.push(index);
    console.log('RIGHT SWIPE');
  };
})
