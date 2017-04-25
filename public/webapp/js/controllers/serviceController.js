function serviceCtrl($scope, factory, service, provider) {
	$scope.factoryTest = function(){
		factory.show();
	};
	$scope.serviceTest = function(){
		service.show();
	};
	$scope.providerTest = function(){
		provider.show();
	};
};