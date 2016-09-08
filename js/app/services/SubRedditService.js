app.service('SubRedditService', function($http){

  this.getData = function(subredditName){
    return $http.get('/rest/subreddit/' + subredditName)
  }
})
