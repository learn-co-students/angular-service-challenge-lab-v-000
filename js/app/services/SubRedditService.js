function SubRedditService($http) {
    this.getData = function (url) {
        return $http.get('/rest/subreddit/'+url);
    }
}

angular
    .module('app')
    .service('SubRedditService', SubRedditService);
