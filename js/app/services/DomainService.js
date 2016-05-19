function DomainService($http){
  this.getData = function (dom){
    return $http.get('/rest/domain/' + dom);
  };
}

angular
    .module('app')
    .service('DomainService', DomainService);
