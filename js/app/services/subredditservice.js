function SubRedditService($http) {
  this.getData = function(subReddit) {
    var url = "/rest/subreddit/" + subReddit
    return $http.get(url);
    // display this data in the view?
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);