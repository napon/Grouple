/*angular.module('login', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'view/login.html',
		controller: 'LoginController'
	});
}])
*/

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
	// var auth = new FirebaseSimpleLogin(ref, function(error, user) {
	//   if (error) {
	//     console.log("Login Failed!", error);
	//   } else {
	//     console.log("Authenticated successfully with payload:", authData);
	//   }
	// }

	// auth.login('facebook');
}

});