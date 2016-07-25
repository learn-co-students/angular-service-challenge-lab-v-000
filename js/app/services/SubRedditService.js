function SubRedditService($http) {
  this.getData = function(subRedditName) {
    return $http.get('/rest/subreddit/' + subRedditName)
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
