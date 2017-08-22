angular.module('uiServiceModule', [])
.factory('uiService', ['$modal', function($modal) {
	function Confirm(config, confirm, cancel) {
	    var scope = config.scope && config.scope.$new() || $rootScope.$new(),
            confirmModal

        scope.confirmMsg = config.confirmMsg || '保存'

	    scope.onCancel = function() {
            confirmModal.hide()
            cancel && cancel()
        }
        scope.onConfirm = function() {
	        var closeModal
	        if(!confirm) {
                confirmModal.hide()
            } else {
                closeModal = confirm.apply(confirmModal)
	            if(typeof closeModal === 'undefined' || closeModal) {
                    confirmModal.hide()
                } else {
                    // TODO 显示loading
                }
            }
        }
		confirmModal = $modal({
            title: config.title || '提示',
            content: config.content || '',
            scope: scope,
            templateUrl: config.templateUrl || 'webapp/template/confirm.modal.tpl.html',
            show: typeof config.show === 'undefined'? true : config.show,
            html: true,
            animation: 'am-fade-and-slide-top'
            // backdrop: 'static', // 固定的这层
        });

        return confirmModal
	}

    // angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    //     $templateCache.put('modal/confirm.modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
    // } ]);

	return {
		confirm: Confirm
	}
}]);