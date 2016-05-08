function SubRedditService($http){

  this.getData = function(subredditName){
    return $http.get('/rest/subreddit/' + subredditName)
  };

}

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
