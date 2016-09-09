function SubRedditService($http) {





  this.getData = function (query) {

    return $http.get('/rest/subreddit/'+query)
  }
}


angular
  .module('app')
  .service('SubRedditService', SubRedditService)