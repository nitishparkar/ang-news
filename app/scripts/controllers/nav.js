'use strict';

app.controller('NavCtrl', function($scope, INITIAL_POST, Post, Auth) {
  $scope.post = angular.copy(INITIAL_POST);
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;

  $scope.submitPost = function() {
    $scope.post.creator = $scope.user.profile.username;
    $scope.post.creatorUID = $scope.user.uid;
    Post.create($scope.post).then(function() {
      $scope.post = angular.copy(INITIAL_POST);
    });
  };
});