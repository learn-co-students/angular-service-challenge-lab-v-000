function SubRedditService($http){

  // var url = 'http://localhost:8080/rest/subreddit/'

  this.getData = function(sub){
    return $http.get('/rest/subreddit/'+ sub)

  }



}

angular
  .module('app')
  .service('SubRedditService', SubRedditService)
