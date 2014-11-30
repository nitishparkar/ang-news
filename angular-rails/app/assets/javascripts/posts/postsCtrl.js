angular.module('whackerNews').controller('PostsCtrl', function($scope, postsFactory, post) {
  $scope.post = post;

  $scope.addComment = function() {
    if($scope.body === '') { return; }
    postsFactory.addComment(post.id, {
      body: $scope.body,
      author: 'user',
      upvotes: 0
    }).success(function(data) {
      $scope.post.comments.push(data);
    });
    $scope.body = '';
  }

  $scope.upvoteComment = function(comment) {
    postsFactory.upvoteComment(post.id, comment);
  }
});