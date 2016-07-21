function SubRedditService($http) {
  this.getData = function (info) {
    return $http.get('/rest/subreddit/' + info);
  };
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);