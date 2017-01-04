function DomainService($http) {
// var Post = $resource('/rest/domain/:domain');

	this.getData = function(domain) {
    return $http.get('/rest/domain/' + domain)
	}
}

angular
	.module('app')
	.service('DomainService', DomainService);
