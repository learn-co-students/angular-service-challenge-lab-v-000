function SubRedditService($http) {
  this.getData = function(getInfo) {
    return $http.get('/rest/subreddit/' + getInfo);
  };
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);