function SubRedditService($http) {

  this.getData = function(subredditname) {
    url = '/rest/subreddit/' + subredditname;
    debugger;
    return $http.get(url);
  }


  }

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
