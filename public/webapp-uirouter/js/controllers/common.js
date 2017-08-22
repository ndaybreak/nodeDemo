app.controller('ShowsController', ['$scope','ShowsService', function($scope, ShowsService) {
    $scope.shows = ShowsService.list();
}]);

app.controller('ShowsDetailController', ['$scope','$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
    $scope.selectedShow = ShowsService.find($stateParams.id);
}]);