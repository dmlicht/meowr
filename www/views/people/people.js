angular.module('starter')
.controller('CardsCtrl', function ($scope, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate) {
  console.log('CARDS CTRL');
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.cards = [];
  //var cats = [];
  //var moreCats = [];
  //$ionicLoading.show();

  //$http.get('https://randomuser.me/api/?results=5').success(function (response) {
  //    angular.forEach(response.results, function (result) {
  //      cats.push(result);
  //    });
  //    $ionicLoading.hide();
  //  }).error(function (err) {
  //    console.log(err);
  //  });

  addCats = function(){
    $ionicLoading.show();
    $http.get('https://randomuser.me/api/?results=5').success(function (response) {
      $scope.cards.push.apply($scope.cards, response.results);
      //angular.forEach(response.results, function (result) {
      //  cats.push(result);
      //});
      $ionicLoading.hide();
    }).error(function (err) {
      console.log(err);
    });
  };

  addCats();

  //$scope.cards = Array.prototype.slice.call(cats, 0);
  //$scope.cards = cats;
  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    //if (cats.length<2){
    //  $http.get('https://randomuser.me/api/?results=5').success(function (response) {
    //    console.log(JSON.stringify(response.results));
    //
    //    angular.forEach(response.results, function (result) {
    //      moreCats.push(result);
    //      //console.log(JSON.stringify(result));
    //    });
    //    cats = cats.concat(moreCats);
    //    $scope.cards = cats;
    //    $ionicLoading.hide();
    //  }).error(function (err) {
    //    console.log(err);
    //  });
  };

  $scope.addCard = function() {
    var newCard = cats[Math.floor(Math.random() * cats.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.yesCard = function() {
    console.log('YES');
    $scope.addCard();
  };

  $scope.noCard = function() {
    console.log('NO');
    $scope.addCard();
  };
  $scope.toggleLeft = function() {
  $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
})
