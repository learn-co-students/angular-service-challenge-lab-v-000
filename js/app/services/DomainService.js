angular
  .module('app')
  .service('DomainService', DomainService)

function DomainService($http) {
  this.getData = function(domain) {
    return $http.get('/rest/domain/' + domain)
  }
};