function DomainService($http) {
	this.getData = function(domain) {
    path = '/rest/domain/' + domain;
		return $http.get(path);
	};
}

angular
	.module('app')
	.service('DomainService', DomainService);
