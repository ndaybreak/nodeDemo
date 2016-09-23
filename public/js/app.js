var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap','DataServiceModule', 'SharedServiceModule' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'booking-list.html',
			controller : bookingListCtrl})
		.when('/booking-list', {
				templateUrl : 'booking-list.html',
				controller : bookingListCtrl})
		.when('/tables', {
			templateUrl : 'tables.html',
			controller : tablesCtrl})
		.when('/charts', {
			templateUrl : 'charts.html',
			controller : chartsCtrl})
		.otherwise({
			redirectTo : '/'
		});
} ]);