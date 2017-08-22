function directiveCtrl($scope){
	console.log('parent scope')
	console.log($scope)
	$scope.title = "ttt";


    $scope.userType = 'guest';

    $scope.currentPage = 2;
    $scope.pageSize = 30;
    $scope.totalItems = 200
	$scope.pageList = [15,30,20]
    $scope.pageWrapClass = 'text-right'

    $scope.pageChangeCallback = function() {
        alert(this.currentPage)
        alert(this.pageSize)
    }

}