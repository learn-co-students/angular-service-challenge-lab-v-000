function SubRedditService($http) {

  this.getData = function(name) {
    var link = "/rest/subreddit/" + name
    return $http.get(link);

  }

}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
