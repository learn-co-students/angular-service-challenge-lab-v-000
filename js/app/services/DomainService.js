angular.module('app')
  .service('DomainService', function ($http) {
    this.getData = (url) => $http.get(`/rest/domain/${url}`)
  })
