'use strict';

/**
 * @ngdoc function
 * @name chowSauceApp.controller:AboutCtrl
 * @description
 * # MapCtrl
 * Controller of the chowSauceApp
 */
angular.module('chowSauceApp').controller('MapCtrl', function MapCtrl($scope) {
  console.log($scope);

  $scope.restraunts = [{
    name: "jimmy johns"
  }, {
    name: "heav buf"
  }];

});
