function DomainService($http) {

  this.getData = function(domain) {
    var link = "/rest/domain/" + domain
    return $http.get(link);
 }
}

angular
  .module('app')
  .service('DomainService', DomainService);
