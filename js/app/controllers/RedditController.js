function RedditController(DomainService, SubRedditService) {

	var ctrl = this;
//  array of values filled by the http requests
	ctrl.subRedditPosts = [];
	ctrl.domainPosts = [];

	SubRedditService
		.getData('javascript')
		.then(function (res) {
			ctrl.subRedditPosts = res.data.data.children;
		});

	DomainService
		.getData('google.co.uk')
		.then(function (res) {
			ctrl.domainPosts = res.data.data.children;
		});
}

angular
	.module('app')
	.controller('RedditController', RedditController);


	// Make sure you run stubby -d config.yml to mock our backend.
