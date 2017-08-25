function dataBindCtrl($scope, dataService, validate){

	$scope.myName = 'xxxx';
	
	$scope.$watch('myName',function(newVal,oldVal){
		console.log(newVal);
	});
	$scope.change = function(){
		$scope.myName = 'tank';
	};
	
	$scope.getData = function(){
        dataService.getTableData(function(result){
			alert(result.data);
		});
	};
	
	$scope.checkNumber = function(){
		var result = validate.exec($scope.number, ['onlyNumber']);
		if(!result[0]){
			$scope.errorMesg = 'not only number';
		}else{
			$scope.errorMesg = '';
		}
	};

	$scope.age = 10

	$scope.$watch('name', function(newVal, oldVal, scope) {
		$scope.age = (newVal || 0) + 10
	})

    $scope.submitForm = function(isValid) {
        if (!isValid) {
            alert('验证失败');
        }
    };
}