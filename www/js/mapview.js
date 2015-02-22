angular.module('grouple')
.controller('mapViewController', ['$scope',
  function($scope) {
    var ref = new Firebase("https://grouple.firebaseio.com/events/");

      ref.on('value', function(snapshot) {
        $scope.events = snapshot.val();
        console.log(snapshot.val());
      });
}]);
