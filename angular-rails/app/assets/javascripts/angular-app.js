angular.module('whackerNews', ['ui.router', 'templates'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: function(postsFactory) {
          return postsFactory.getAll();
        }
      }
    }).state('post', {
      url: '/posts/{id}',
      templateUrl: 'posts/_post.html',
      controller: 'PostsCtrl',
      resolve: {
        post: function($stateParams, postsFactory) {
          return postsFactory.get($stateParams.id);
        }
      }
    });

  // the known route, with missing '/' - let's create alias
  $urlRouterProvider.when('', '/');

  $urlRouterProvider.otherwise('/404');
});
