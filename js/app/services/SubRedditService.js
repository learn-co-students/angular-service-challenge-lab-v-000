function SubRedditService($http) {
	this.getData = function(subreddit) {
		return $http.get('/rest/subreddit/'+subreddit)
	}
}

SubRedditService.inject = ['$http'];

angular
	.module('app')
	.service('SubRedditService', SubRedditService);