function SubRedditService($http) {
  this.getData = function (data) {
    var url = '/rest/subreddit/' + data;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);