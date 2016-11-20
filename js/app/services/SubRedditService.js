function SubRedditService($http) {
  this.getData = function(sub_dir) {
    return $http.get('/rest/subreddit/'+sub_dir);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
