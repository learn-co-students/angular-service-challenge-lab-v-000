angular
  .module('app')
  .service('SubRedditService', SubRedditService)

function SubRedditService($http) {
  this.getData = function(data) {
    return $http.get('/rest/subreddit/' + data);
  };
}

