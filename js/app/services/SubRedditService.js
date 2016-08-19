function SubRedditService($http) {
    this.getData = function(subredditName){
      this.subredditName = subredditName;
      return $http.get('/rest/subreddit/' + subredditName)
    };
}

angular
    .module('app')
    .service('SubRedditService', SubRedditService);
