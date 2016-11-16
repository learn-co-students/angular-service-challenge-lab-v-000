function SubRedditService($http) {
  this.getData = function(subr) {
   return $http.get('/rest/subreddit/'+subr)
  }
}

angular
  .module("app")
  .service("SubRedditService", SubRedditService)
