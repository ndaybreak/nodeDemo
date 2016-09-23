angular.module("ServiceTestModule",[]).
	factory("factory", function(){
		var factory = {
			show : function(){
				alert("factory");
			}
		};
		return factory;
	}).
	service("service", function(){
		this.show = function(){
			alert("service");
		};
	}).provider("provider", function(){
		this.backendUrl = "http://localhost:3000";
		this.setBackendUrl = function(newUrl) {
			if(newUrl) this.backendUrl = newUrl;
		};
		this.$get = function(){
			var self = this;
			var service = {
					show : function(){
						alert(self.backendUrl);
					}
			};
			return service;
		}
	});