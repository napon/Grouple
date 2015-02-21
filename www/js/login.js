angular.module('login', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'view/login.html',
		controller: 'LoginController'
	});
}])
.controller('LoginController', [function($scope) {
	'use strict';

}]);