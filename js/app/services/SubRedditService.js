function SubRedditService($http) {
  this.getData =  function(name) {
    var url = '/rest/subreddit/' + name;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);
