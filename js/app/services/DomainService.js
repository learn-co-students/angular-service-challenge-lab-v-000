function DomainService($http) {

    this.getData = function (data) {
        var url = '/rest/domain/' + data;
        return $http.get(url);
    }
}
 
angular
    .module('app')
    .service('DomainService', DomainService);