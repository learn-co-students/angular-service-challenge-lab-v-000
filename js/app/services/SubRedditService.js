function SubRedditService($http) {
	this.getData = function(subreddit) {
    path = '/rest/subreddit/' + subreddit
		return $http.get(path);
	};
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);
