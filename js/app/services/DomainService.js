function DomainService($http) {
  this.getData = function(url) {
    return $http.get('/rest/domain/' + url);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
