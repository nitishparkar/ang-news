angular.module('whackerNews').factory('postsFactory', function($http) {
  var ret = {
    posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ]
  };

  ret.getAll = function() {
    return $http.get('/posts.json').success(function(data) {
      angular.copy(data, ret.posts);
    });
  };

  ret.get = function(postId) {
    return $http.get('/posts/' + postId + '.json').then(function(res) {
      return res.data;
    });
  };

  ret.create = function(post) {
    return $http.post('/posts.json', post).success(function(data) {
      ret.posts.push(data);
    });
  };

  ret.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json').success(function(data) {
      post.upvotes += 1;
    });
  };

  ret.addComment = function(postId, comment) {
    return $http.post('/posts/' + postId + '/comments.json', comment);
  };

  ret.upvoteComment = function(postId, comment) {
    return $http.put('/posts/' + postId + '/comments/' + comment.id + '/upvote.json').success(function(data) {
      comment.upvotes += 1;
    });
  };

  return ret;
});