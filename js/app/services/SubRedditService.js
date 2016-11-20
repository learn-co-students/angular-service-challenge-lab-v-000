function SubRedditService($http) {

  this.getData = function (searchTerm) {
    var path = '/rest/subreddit/' + searchTerm;
    return $http.get(path)
  };
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
