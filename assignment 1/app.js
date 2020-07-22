(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];


 $scope.chicken = function () {
    $scope.stateOfBeing = "fed";
    
  };
}



})();



