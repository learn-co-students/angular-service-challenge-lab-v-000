function DomainService($http){
  this.getData = function(url_extension){
    return $http({method: "GET", url: "/rest/domain/" + url_extension});
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);