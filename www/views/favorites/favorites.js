angular.module('starter')
.controller('favoritesCtrl', function($scope, FavoritesService){
  $scope.yesCats = FavoritesService.yesCats;
  });
