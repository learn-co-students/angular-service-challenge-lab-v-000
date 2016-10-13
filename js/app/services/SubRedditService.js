function SubRedditService($http) {
  this.getData = function (subReddittName) {
    this.subReddittName = subReddittName;
    return $http.get('/rest/subreddit/' + subReddittName)
  };
}

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
