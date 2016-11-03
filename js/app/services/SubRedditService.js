function SubRedditService($http){
  this.getData = function(subRedditName){
    var path = '/rest/subreddit/' + subRedditName;
    return $http.get(path)
  }

}


angular
  .module('app')
  .service('SubRedditService', SubRedditService)
