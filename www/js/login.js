angular.module('grouple').controller('LoginController', function($scope, $location) {

	$scope.login = function() {
		var ref = new Firebase("https://grouple.firebaseio.com/");
		ref.authWithOAuthPopup("facebook", function(error, auth) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		  	console.log("Authentication worked!");
		  }
		});
		$location.path("/map");
	};
});	
