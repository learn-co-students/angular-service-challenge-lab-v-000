function SubRedditService($http){
  this.getData = function(subReddit){
    return $http.get('/rest/subreddit/' + subReddit);
  };
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
