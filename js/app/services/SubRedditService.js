function SubRedditService($http){
  this.getData = function(url_extension){
    return $http({method: "GET", url: "/rest/subreddit/" + url_extension})
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);