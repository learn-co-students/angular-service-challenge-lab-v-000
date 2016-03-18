function DomainService($http) {
  this.getData = function(route) {
    return $http.get('/rest/domain/' + route);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
