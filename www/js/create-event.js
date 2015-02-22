
angular.module("grouple").controller("EventController", function ($scope, $location) {
		var ref = new Firebase("https://grouple.firebaseio.com/events");

		$scope.addEvent = function() {
			ref.push({name: $scope.inputName,
					  description: $scope.inputDescrip,
					  currentPeople: [""],
					  maxPeople: $scope.inputMaxPpl,
					  startTime: $scope.inputStartTime,
					  endTime: $scope.inputEndTime,
					  lat: $scope.inputLat,
					  lon: $scope.inputLon,
					  tags: $scope.inputTags});
			$location.path("/map");
		};
});