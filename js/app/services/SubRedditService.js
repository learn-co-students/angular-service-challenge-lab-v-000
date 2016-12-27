function SubRedditService($http) {
  this.getData = function(sub) {
    return $http.get('/rest/subreddit/' + sub)
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
