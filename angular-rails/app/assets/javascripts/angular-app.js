angular.module('whackerNews', ['ui.router', 'templates', 'Devise'])
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
    }).state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }
    }).state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }
    });

  // the known route, with missing '/' - let's create alias
  $urlRouterProvider.when('', '/');

  $urlRouterProvider.otherwise('/404');
});
