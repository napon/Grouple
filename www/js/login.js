angular.module('grouple').controller('LoginController', function($scope) {
	'use strict';

	$scope.login = function() {
		console.log("blahblah");

		var ref = new Firebase("https://grouple.firebaseio.com/");
		console.log('hi');
		ref.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	};

});
