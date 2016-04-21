function DomainService($http) {
  this.getData =  function(name) {
    url ="/rest/domain/" + name;
    return $http.get(url);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
