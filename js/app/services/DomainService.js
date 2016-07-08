function DomainService($http) {
  this.getData = function (subreddit) {
    return $http.get('/rest/domain/' + subreddit);
  }
}

angular
  .module('app')
  .service('DomainService', DomainService);
