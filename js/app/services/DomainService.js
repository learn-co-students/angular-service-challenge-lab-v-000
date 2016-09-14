function DomainService($http) {
	this.getData = function (bla) {
		return $http.get('/rest/domain/'+bla);
	};

}

angular
	.module('app')
	.service('DomainService', DomainService);