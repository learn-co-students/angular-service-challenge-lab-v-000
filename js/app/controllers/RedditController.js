function RedditController(DomainService, SubRedditService) {

	var ctrl = this;

	ctrl.subRedditPosts = [];
	ctrl.domainPosts = [];

	SubRedditService
		.getData('dynastyff')
		.then(function (res) {
			ctrl.subRedditPosts = res.data.data.children;
		});

	DomainService
		.getData('espn.com')
		.then(function (res) {
			ctrl.domainPosts = res.data.data.children;
		});
}

angular
	.module('app')
	.controller('RedditController', RedditController);
