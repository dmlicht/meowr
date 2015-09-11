angular.module('starter')
.controller('CardsCtrl', function ($scope, FavoritesService, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate) {
  console.log('CARDS CTRL');
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.cards = [];

  addCats = function(amount){
    if ($scope.cards.length < 1) {
      $ionicLoading.show();
    }
    $http.get('https://randomuser.me/api/?results='+amount).success(function (response) {
      $scope.cards.unshift.apply($scope.cards, response.results);
      $ionicLoading.hide();
    }).error(function (err) {
      console.log(err);
    });
  };

  addCats(5);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    if ($scope.cards.length < 15) {
      addCats(20);
    }
  };

  $scope.yesCard = function(index) {
    var yesCat = $scope.cards[index];
    FavoritesService.yesCats.push(yesCat);
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
  // TODO: this isn't being hit. Investigate.
.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
  };
  $scope.cardSwipedRight = function(index) {
    var yesCat = $scope.cards[index];
    FavoritesService.yesCats.push(yesCat);
    console.log('RIGHT SWIPE');
  };
});
