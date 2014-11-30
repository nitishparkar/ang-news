angular.module('whackerNews').controller('PostsCtrl', function($scope, postsFactory, $stateParams) {
  $scope.post = postsFactory.posts[$stateParams.id];

  $scope.addComment = function() {
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  }
});