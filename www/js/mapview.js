angular.module('mapView', ['uiGmapgoogle-maps', 'firebase'])
.controller('mapViewController', ['$scope', 
  function($scope) {
    var ref = new Firebase("https://grouple.firebaseio.com/events/");

      ref.on('value', function(snapshot) {
        $scope.events = snapshot.val();
        console.log(snapshot.val());
      });

    $scope.map = { center: { latitude: 49.2827, longitude: -123.1 }, zoom: 12 };

}]);