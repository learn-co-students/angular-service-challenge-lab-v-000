function DomainService($http) {
  this.getData = function(postInfo) {
    return $http.get('/rest/domain/' + postInfo);
  };
}

angular
  .module('app')
  .service('DomainService', DomainService);
