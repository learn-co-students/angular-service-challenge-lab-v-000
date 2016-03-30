function DomainService($http) {
	this.getData = function(domain) {
		return $http.get('/rest/domain/'+domain)
	}
}

DomainService.inject = ['$http'];

angular
	.module('app')
	.service('DomainService', DomainService)