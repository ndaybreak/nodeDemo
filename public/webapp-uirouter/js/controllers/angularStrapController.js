function angularStrapCtrl($scope, $modal, dataService, validate, uiService,$alert){
    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal<br />This is a multiline message!",
        "html": true
    };

    $scope.myName = 'xiao'

    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function() {
        // infoModal.$promise.then(infoModal.show);
        uiService.confirm({
            scope: $scope,
            title: 'test',
            content: '删除？'
        }, function() {
            alert(1)
        })
    }


    $scope.info = {
        name: 'xiao',
        age: 26,
        addr: '山东省'
    }

    var infoModal = uiService.confirm({
        scope: $scope,
        title: '个人信息',
        templateUrl: '/webapp/html/myInfoModal.html',
        show: false
    }, function() {
        var modal = this
        console.log($scope.info)
        setTimeout(function() {
            modal.hide()
        }, 3000)
        return false
    }, function() {
        alert('closed')
    })
    $scope.showInfo = function() {
        infoModal.$promise.then(infoModal.show);
    }

    $scope.onModalClosed = function() {
        infoModal.hide()
    }
    $scope.onModalSave = function() {
        console.log($scope.info)
    }

    $scope.showTip = function() {
        $alert({
            title: 'Holy guacamole!',
            content: 'Best check yo self, you\'re not looking too good.',
            placement: 'top',
            type: 'info',
            show: true
        });
    }
}