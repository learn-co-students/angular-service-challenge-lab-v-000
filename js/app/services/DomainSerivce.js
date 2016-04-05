function DomainService($http){
  
  this.getData = function(path){
    return $http.get('/rest/domain/'+path);
  };
}

angular
  .module('app')
  .service('DomainService', DomainService)