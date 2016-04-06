function SubRedditService($http) {
  this.getData = function (subreddit) {
    var url = '/rest/subreddit/' + subreddit;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
