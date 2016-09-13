function DomainService($http){
  this.getData = function(){
    return $http.get('/rest/domain/google.co.uk')
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);