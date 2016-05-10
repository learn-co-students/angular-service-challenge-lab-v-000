function SubRedditService($resource){
  var Subreddit = $resource('rest/subreddit/:javascript');


  this.getData = function(subreddit, callback){
    Subreddit.get({javascript: subreddit}, callback);
  };

}

angular
  .module('app')
  .service('SubRedditService', SubRedditService);


// The following willpass the tests:

// function SubRedditService($http) {
//  this.getData = function (subreddit) {
//    return $http.get('/rest/subreddit/' + subreddit);
//  };
// }