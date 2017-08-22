;
var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.router', 'mgcrea.ngStrap', 'ui.bootstrap', 'DataServiceModule', 'SharedServiceModule', 'ServiceTestModule', 'uiServiceModule']);

angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    $templateCache.put('webapp/template/confirm.modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header ng-hide" ng-show="title"><button type="button" class="close" ng-click="onCancel()">×</button><h4 class="modal-title ng-binding" ng-bind-html="title"></h4></div><div class="modal-body ng-binding" ng-bind-html="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="onCancel()">Close</button><button type="button" class="btn btn-primary" ng-click="onConfirm()" ng-bind="confirmMsg"></button></div></div></div></div>');
} ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'html/header.html'
                },
                'content': {
                    templateUrl: 'html/content.html'
                },
                'footer': {
                    templateUrl: 'html/footer.html'
                }
            }
        })

        .state('app.home', {
            url: 'home',
            templateUrl: 'html/home.html'
        })

        .state('app.dashboard', {
            url: 'dashboard',
            templateUrl: 'html/dashboard.html'
        })

        // .state('app.dashboard', {
        //     url: 'dashboard',
        //     views: {
        //         'content@': {
        //             templateUrl: 'html/dashboard.html'
        //         }
        //     }
        //
        // })

        .state('app.campaigns', {
            url: 'campaigns',
            views: {
                'content@': {
                    templateUrl: 'html/campaigns.html'
                }
            }

        })
}]);

app.factory('ShowsService',function(){
    var shows = [{
        id: 1,
        name: 'Walking Dead',
        description: 'The Walking Dead is an American post-apocalyptic horror drama television series developed by Frank Darabont. It is based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. It stars Andrew Lincoln as sheriff\'s deputy Rick Grimes, who awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies.'
    },
        {
            id: 2,
            name: 'Breaking Bad',
            description: 'Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. The show originally aired on the AMC network for five seasons, from January 20, 2008 to September 29, 2013. The main character is Walter White (Bryan Cranston), a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series.'
        },
        {
            id: 3,
            name: '7D',
            description: 'The 7D is an American animated television series produced by Disney Television Animation, and broadcast on Disney XD starting in July 7, 2014. It is a re-imagining of the titular characters from the 1937 film Snow White and the Seven Dwarfs by Walt Disney Productions'
        }];


    return {
        list: function(){
            return shows;
        },
        find: function(id){
        	for(var i = 0, len = shows.length; i < len; i++) {
        		if(shows[i].id == id) {
        			return shows[i]
				}
			}
        }
    }
});

app.filter('checkFlag', function() {
	return function(input, startIndex, endIndex) {
		return input ? input.slice(2, 5) : [];
	};
});

app.config(function(providerProvider){
	providerProvider.setBackendUrl("hello");
});
