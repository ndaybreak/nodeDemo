var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap','DataServiceModule', 'SharedServiceModule' ]);

app.config([ '$routeProvider', function($routeProvider) {
	var baseUrl = 'myapp/template/'
	$routeProvider
		.when('/', {
			templateUrl : baseUrl + 'booking-list',
			controller : bookingListCtrl})
		.when('/booking-list', {
				templateUrl : baseUrl + 'booking-list',
				controller : bookingListCtrl})
		.when('/tables', {
			templateUrl : baseUrl + 'tables',
			controller : tablesCtrl})
		.when('/charts', {
			templateUrl : baseUrl + 'charts',
			controller : chartsCtrl})
		.otherwise({
			redirectTo : '/'
		});
} ]);