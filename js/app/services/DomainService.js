function DomainService($http) {
  this.getData = function (domain) {
    this.domain = domain;
    return $http.get('/rest/domain/' + domain)
  };
}

angular
  .module('app')
  .service('DomainService', DomainService)
