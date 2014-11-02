'use strict';

app.controller('NavCtrl', function($scope, INITIAL_POST, Post) {
  $scope.post = angular.copy(INITIAL_POST);

  $scope.submitPost = function() {
    Post.create($scope.post).then(function() {
      $scope.post = angular.copy(INITIAL_POST);
    });
  };
});