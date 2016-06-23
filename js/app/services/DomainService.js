angular
  .module('app')
  .service('DomainService', DomainService);
  
function DomainService($http) {
  this.getData = function(data) {
    return $http.get('/rest/domain/' + data);
  };
}