// angular.module('tweet', ['ngRoute'])
// .config(['$routeProvider', function($routeProvider) {
// 	$routeProvider.when('/tweets', {
// 		templateUrl: 'view/tweets.html',
// 		controller: 'CommunityTweetController'
// 	});
// }])
angular.module('grouple')
.controller('CommunityTweetController', function($scope, $http) {
	'use strict';
	function fetchPublicTweets() {
		var endpoint = 'http://hub.urbanopus.net/wotkit/api/sensors/';
		var sensorName = 'admin.city-of-vancouver-tweets';
		var param = 'beforeE=100';
		$scope.tweets = [];
		$http.get(endpoint + sensorName +  '/data?' + param).then(
			function(response) {
				if(response.data.length > 0) {
					$scope.tweets = parseTwitterFeed(response.data);
				}
			});
	
	}

	function parseTwitterFeed(response) {
		return response.map(function(obj) {
						var tweet = {};
						tweet.time = obj.timestamp_iso;
						tweet.message = obj.message;
						tweet.user = obj.user;
						return tweet;
					});
	}

	fetchPublicTweets();
	
});