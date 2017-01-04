function SubRedditService($http) {
// var SubReddit = $resource('/rest/subreddit/:name');

	this.getData = function(name) {
    return $http.get('/rest/subreddit/' + name)
	}
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);
