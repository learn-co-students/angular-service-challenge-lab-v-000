function SubRedditService($http) {
  //debugger;
  this.getData = function (sub) {
    debugger;
    //return $http.get('/rest/subreddit/' + sub)
  };
};

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
