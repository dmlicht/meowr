angular.module('starter.services', [])
  .factory('FavoritesService', function () {

  var FavoritesService = {};
  FavoritesService.yesCats = [];
  return FavoritesService;
});
