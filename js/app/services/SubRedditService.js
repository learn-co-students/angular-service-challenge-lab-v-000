function SubRedditService($http) {
	this.getData = function (javascript) {
		return $http.get('/rest/subreddit/' + javascript);
	};
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);
