'use strict';

app.factory('Post', function($resource) {
  return $resource('https://scorching-heat-7282.firebaseio.com/posts/:id.json');
});

