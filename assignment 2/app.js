(function(){
  'use strict';

angular.module('myApp', [])
  .controller('myCtrl', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
      $scope.count++;
    };
 });