function DomainService($http) {

     this.getData = function(redditDomain) {
       return $http.get('/rest/domain/' + redditDomain );
    };
}
 
angular
    .module('app')
    .service('DomainService', DomainService);