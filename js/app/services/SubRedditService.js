function SubRedditService($http) {

  this.getData = function(subreddit) {
    var baseUrl = '/rest/subreddit/';
    var url = baseUrl + subreddit;

    return $http.get(url);
  }

}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
