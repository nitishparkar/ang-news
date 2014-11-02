'use strict';

app.controller('PostsCtrl', function($scope, INITIAL_POST, Post) {

  $scope.posts = Post.all;
  $scope.post = angular.copy(INITIAL_POST);

  $scope.deletePost = function(post) {
    Post.delete(post);
  };
});