'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  var INITIAL_POST = {title: '', url: 'http://'};
  $scope.posts = Post.get();
  $scope.post = angular.copy(INITIAL_POST);

  $scope.submitPost = function() {
    Post.save($scope.post, function(ref) {
      $scope.posts[ref.name] = $scope.post;
      $scope.post = angular.copy(INITIAL_POST);
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete({id: postId}, function() {
      delete $scope.posts[postId];
    });
  };
});