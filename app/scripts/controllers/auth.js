'use strict';

app.controller('AuthCtrl', function($scope, Auth, $location, user) {
  if(user) {
    $location.path('/');
  }

  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      return Auth.login($scope.user).then(function() {
        $location.path('/');
      }, function(err) {
        $scope.error = err.toString();
      });
    });
  }

  $scope.login = function() {
    Auth.login($scope.user).then(function() {
      $location.path('/');
    }, function(err) {
      $scope.error = err.toString();
    });
  }
});