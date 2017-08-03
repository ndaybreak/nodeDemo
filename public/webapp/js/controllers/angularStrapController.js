function angularStrapCtrl($scope, $modal, dataService, validate, uiService){
    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal<br />This is a multiline message!",
        "html": true
    };

    $scope.myName = 'xiao'

    // $scope.show = false

    $scope.info = {
        name: 'xiao',
        age: 26,
        addr: '山东省'
    }

    var infoModal = $modal({
        scope: $scope,
        title: '个人信息',
        templateUrl: '/webapp/html/myInfoModal.html',
        show: false
    })
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function() {
        infoModal.$promise.then(infoModal.show);

    };

    $scope.onModalClosed = function() {
        infoModal.hide()
    }
    $scope.onModalSave = function() {
        console.log($scope.info)
    }

}