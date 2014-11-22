'use strict';

app.controller('NavCtrl', function($scope, INITIAL_POST, Post, Auth) {
  $scope.post = angular.copy(INITIAL_POST);
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;

  $scope.submitPost = function() {
    Post.create($scope.post).then(function() {
      $scope.post = angular.copy(INITIAL_POST);
    });
  };
});