function DomainService($http) {
  this.getData = function(sub_dir) {
    return $http.get('/rest/domain/'+sub_dir);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
