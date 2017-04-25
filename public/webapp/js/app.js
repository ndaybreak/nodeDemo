var app = angular.module('myApp', [ 'ngRoute', 'DataServiceModule', 'SharedServiceModule', 'ServiceTestModule']);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'html/dataBind.html',
			controller : dataBindCtrl})
		.when('/dataBindTest', {
				templateUrl : 'html/dataBind.html',
				controller : dataBindCtrl})
		.when('/directiveTest', {
			templateUrl : 'html/directive.html',
			controller : directiveCtrl})
		.when('/scroll', {
			templateUrl : 'html/scroll.html',
			controller : scrollCtrl})
		.when('/serviceTest', {
			templateUrl : 'html/service.html',
			controller : ["$scope", "factory", "service", "provider", serviceCtrl]})
		.otherwise({
			redirectTo : '/'
		});
} ]);

app.filter('checkFlag', function() {
	return function(input, startIndex, endIndex) {
		return input ? input.slice(2, 5) : [];
	};
});

app.config(function(providerProvider){
	providerProvider.setBackendUrl("hello");
});

//app.config(['$locationProvider', function($locationProvider) {
//    $locationProvider.html5Mode(true);
//    $locationProvider.hashPrefix('!');
//}]);

