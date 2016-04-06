function SubRedditService($http) {
  this.getData = function (subreddit) {
    var url = 'http://localhost:8080/rest/subreddit/' + subreddit;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
