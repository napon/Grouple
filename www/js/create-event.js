
angular.module("grouple").controller("EventController", ["$scope", 
	"$firebase", function ($scope, $firebase) {
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
		};
}]);