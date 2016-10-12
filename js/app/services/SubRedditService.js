function SubRedditService($http) {

	this.getData = function(subreddit_name) {
		return $http.get('/rest/subreddit/' + subreddit_name);
	}
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService)