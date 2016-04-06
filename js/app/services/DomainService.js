function DomainService($http){
  this.getData = function (domain) {
    var url = 'http://localhost:8080/rest/domain/' + domain;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
