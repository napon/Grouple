angular.module('grouple')
.controller('CommunityTweetController', function($scope, $http, $location) {
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

	$scope.findgroups = function() {
        $location.path('/map');
    };

    $scope.instafeed = function() {
        $location.path('/tweets');
    };

	function parseTwitterFeed(response) {
		return response.map(function(obj) {
						var tweet = {};
						tweet.time = obj.timestamp_iso;
						tweet.message = obj.message;
						tweet.user = obj.user;
						tweet.mood = obj.sentiment;
						return tweet;
					}).sort(function(a,b) {
						return a.mood > b.mood;
					});
	}

	fetchPublicTweets();
	
});