function SubRedditService($http) {
	this.getData = function(subName) {
		return $http.get('/rest/subreddit/' + subName);
	}
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);