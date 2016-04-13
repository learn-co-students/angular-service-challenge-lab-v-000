function SubRedditService($http) {
    this.getData = function (subjectMatter) {
        return $http.get('/rest/subreddit/' + subjectMatter);
    }
}
 
angular
    .module('app')
    .service('SubRedditService', SubRedditService);