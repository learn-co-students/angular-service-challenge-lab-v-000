function DomainService($http) {
	this.getData = function(domainName) {
    return $http.get('/rest/subreddit/' + domainName);
  }
}

angular
	.module('app')
	.service('DomainService', DomainService)