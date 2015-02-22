var globalevents;

angular.module('grouple')
.controller('mapViewController', ['$scope', '$location',
  function($scope, $location) {
    $scope.findgroups = function() {
        $location.path('/map');
    };

    $scope.instafeed = function() {
        $location.path('/tweets');
    };

    var ref = new Firebase("https://grouple.firebaseio.com/events/");
      ref.on('value', function(snapshot) {
        // $scope.events = snapshot.val();
        var events = [];
        var returnedObj = snapshot.val();
        Object.keys(returnedObj) && 
        Object.keys(returnedObj).map(function(key) {
          events.push(returnedObj[key]);
        });
        $scope.events = events;
        $scope.$apply(function() {
          $scope.events = events;
        });
      });
}]);
