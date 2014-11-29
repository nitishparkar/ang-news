angular.module('whackerNews', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    }).state('post', {
      url: '/posts/{id}',
      templateUrl: '/post.html',
      controller: 'PostCtrl'
    });

  $urlRouterProvider.otherwise('home');
})
.controller('MainCtrl', function($scope, postsFactory) {
  $scope.test = "Hello World";

  $scope.posts = postsFactory.posts;

  $scope.addPost = function() {
    if($scope.title && $scope.title !== '') {
      $scope.posts.push({
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
    post.upvotes += 1;
  }
})
.controller('PostCtrl', function($scope, postsFactory, $stateParams) {
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
})
.factory('postsFactory', function() {
  var ret = {
    posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ]
  };

  return ret;
});