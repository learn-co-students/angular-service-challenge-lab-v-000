function DomainService ($http){
  this.getData = function (name) {
    return $http.get('/rest/subreddit/' + name);
  };
}




angular
	.module('app')
	.controller('SubRedditService', SubRedditService);
