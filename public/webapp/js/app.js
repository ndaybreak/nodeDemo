;
var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap', 'DataServiceModule', 'SharedServiceModule', 'ServiceTestModule', 'uiServiceModule']);

angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    $templateCache.put('webapp/template/confirm.modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header ng-hide" ng-show="title"><button type="button" class="close" ng-click="onCancel()">×</button><h4 class="modal-title ng-binding" ng-bind-html="title"></h4></div><div class="modal-body ng-binding" ng-bind-html="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="onCancel()">Close</button><button type="button" class="btn btn-primary" ng-click="onConfirm()" ng-bind="confirmMsg"></button></div></div></div></div>');
} ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'html/dataBind.html',
			controller : dataBindCtrl})
		.when('/dataBindTest', {
				templateUrl : 'html/dataBind.html',
				controller : dataBindCtrl})
		.when('/validate', {
				templateUrl : 'html/validate.html',
				controller : validateCtrl})
		.when('/directiveTest', {
			templateUrl : 'html/directive.html',
			controller : directiveCtrl})
		.when('/picaPagination', {
			templateUrl : 'html/picaPagination.html',
			controller : picaPaginationCtrl})
		.when('/scroll', {
			templateUrl : 'html/scroll.html',
			controller : scrollCtrl})
		.when('/serviceTest', {
			templateUrl : 'html/service.html',
			controller : ["$scope", "factory", "service", "provider", serviceCtrl]})
		.when('/pdf', {
			templateUrl : 'html/pdf.html',
			controller : pdfCtrl})
		.when('/angularStrap', {
			templateUrl : 'html/angularStrap.html',
			controller : angularStrapCtrl})
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