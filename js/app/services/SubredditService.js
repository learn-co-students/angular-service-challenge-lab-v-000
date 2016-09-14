function SubRedditService($http) {
	this.getData = function (bla) {
		return $http.get('/rest/subreddit/'+bla);
	};

}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);