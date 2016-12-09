function SubRedditService($http){

	this.getData = function(type){
		return $http.get('/rest/subreddit/' + type)
	}


}




angular
.module('app')
.service('SubRedditService',SubRedditService)