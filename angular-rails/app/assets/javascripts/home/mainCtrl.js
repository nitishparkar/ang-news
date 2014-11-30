angular.module('whackerNews').controller('MainCtrl', function($scope, postsFactory) {
  $scope.test = "Hello World";

  $scope.posts = postsFactory.posts;

  $scope.addPost = function() {
    if($scope.title && $scope.title !== '') {
      postsFactory.create({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    }
  }

  $scope.upvote = function(post) {
    postsFactory.upvote(post);
  };
});