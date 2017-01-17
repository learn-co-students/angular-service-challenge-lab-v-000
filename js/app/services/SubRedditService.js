function SubRedditService($http) {
  this.getData = function(name) {
    return $http({
      method: "GET",
      url: '/rest/subreddit/' + name
    });
  }

}

angular
.module('app')
.service('SubRedditService', SubRedditService);
