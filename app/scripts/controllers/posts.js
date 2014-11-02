'use strict';

app.controller('PostsCtrl', function($scope, $location, Post) {
  var INITIAL_POST = {title: '', url: 'http://'};

  $scope.posts = Post.all;
  $scope.post = angular.copy(INITIAL_POST);

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(ref) {
      $location.path('/posts/' + ref.name());
    });
  };

  $scope.deletePost = function(post) {
    Post.delete(post);
  };
});