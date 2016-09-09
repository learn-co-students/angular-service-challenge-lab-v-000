function DomainService($http) {
  
  this.getData = function (query) {

    return $http.get('/rest/domain/'+query)
  }

}


angular
  .module('app')
  .service('DomainService', DomainService)