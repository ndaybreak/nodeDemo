function uiBootstrapCtrl($scope, $modal, dataService, validate, uiService, $rootScope, $log){
    $scope.totalItems = 640;
    $scope.currentPage = 4;

    $scope.pageSize = 10

    $scope.setPagesNum = function() {
        alert(arguments)
    }

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        // alert($scope.currentPage);
    };

    $scope.maxSize = 50;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

}