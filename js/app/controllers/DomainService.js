function DomainService($http) {
  this.getData = function(domainName) {
    return $http.get('/rest/domain/'+domainName);
  };
}

angular
  .module('app')
  .service('DomainService', DomainService);