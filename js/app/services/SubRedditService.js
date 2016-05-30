function SubRedditService($http){
  this.getData = function(reddit){
    return $http.get('/rest/subreddit/' + reddit);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
