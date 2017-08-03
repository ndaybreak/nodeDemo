angular.module('uiServiceModule', [])
.factory('uiService', ['$modal', function($modal) {
	function Confirm(config) {
	    config.scope.onClosed = function() {
	        alert('closed')
        }
		var confirmModal = $modal({
            title: config.title || '提示',
            content: config.content || '',
            scope: config.scope,
            templateUrl: config.templateUrl || '/webapp/template/confirmModal.html',
            show: false,
            animation: 'am-fade-and-slide-top'
            // backdrop: 'static', // 固定的这层
        });

        confirmModal.$promise.then(function() {
            confirmModal.show()
        });
	}

    // angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    //     $templateCache.put('modal/confirm.modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
    // } ]);

	return {
		confirm: Confirm
	}
}]);