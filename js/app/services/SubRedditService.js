angular.module(`app`)
  .service('SubRedditService', function ($http) {
    this.getData = (url) => $http.get(`/rest/subreddit/${url}`)
  })
