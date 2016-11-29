angular
  .module('app')
  .service('SubRedditService', function ($http){
    this.getData = function(subreddit){
      let url = `/rest/subreddit/${subreddit}`;
      return $http.get(url);
    }
  });
