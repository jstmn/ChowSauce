'use strict';

/**
 * @ngdoc function
 * @name chowSauceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chowSauceApp
 */
angular.module('chowSauceApp').controller('MainCtrl', function MainCtrl($scope) {

  $scope.header = "Welcome!";
  $scope.subheader = "What kind of food would you like to eat?";

  $scope.foods = [{
    name: 'pizza',
    emoji: '🍕',
    redirect: "/#!/map?type=pizza"
  }, {
    name: 'burger',
    emoji: '🍔',
    redirect: "/#!/map?type=burger"
  }, {
    name: 'taco',
    emoji: '🌮',
    redirect: "/#!/map?type=taco"
  }, {
    name: 'burrito',
    emoji: '🌯',
    redirect: "/#!/map?type=burrito"
  }, {
    name: 'sushi',
    emoji: '🍣',
    redirect: "/#!/map?type=sushi"
  }, {
    name: 'icecream',
    emoji: '🍦',
    redirect: "/#!/map?type=icecream"
  }, {
    name: 'donut',
    emoji: '🍩',
    redirect: "/#!/map?type=donut"
  }, {
    name: 'bar',
    emoji: '🍸',
    redirect: "/#!/map?type=bar"
  }, {
    name: 'indian',
    emoji: '🍛',
    redirect: "/#!/map?type=indian"
  }, {
    name: 'noodles',
    emoji: '🍜',
    redirect: "/#!/map?type=noodles"
  }, {
    name: 'coffee',
    emoji: '☕️',
    redirect: "/#!/map?type=coffee"
  }];


});
