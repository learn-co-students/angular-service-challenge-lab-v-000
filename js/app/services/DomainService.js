angular
  .module('app')
  .service('DomainService', function ($http){
    this.getData = function(domain){
      let url = `/rest/domain/${domain}`
      return $http.get(url);
    }
  });
