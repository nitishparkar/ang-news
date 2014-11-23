'use strict';

app.controller('PostsCtrl', function($scope, INITIAL_POST, Post, Auth) {

  $scope.posts = Post.all;
  $scope.post = angular.copy(INITIAL_POST);
  $scope.user = Auth.user;

  $scope.deletePost = function(post) {
    Post.delete(post);
  };
});