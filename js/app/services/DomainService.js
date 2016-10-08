function DomainService($http) {

  this.getData = function(domain) {
    var baseUrl = '/rest/domain/';
    var url = baseUrl + domain;

    return $http.get(url);
  }

}

angular
  .module('app')
  .service('DomainService', DomainService);
