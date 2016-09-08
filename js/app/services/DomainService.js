app.service('DomainService', function($http){

  this.getData = function(domain){
    return $http.get('/rest/domain/' + domain)
  }
})
