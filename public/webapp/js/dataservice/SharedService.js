angular.module('SharedServiceModule', [])
.factory('check', function(AdminService) {
	var _c = {};
	_c.trim = function(val){
		return val.replace(/(^\s*)|(\s*$)/g,"");
	};
	_c.notNull = function(val){
		var reg = /.+/g;
		return this.trim(val).match(reg) ? true : false;
	};
	_c.min2 = function(val){
		var reg = /^.{2,}$/g;
		return this.trim(val).match(reg) ? true : false;
	};
	
	_c.onlyNumber = function(val){
		return !isNaN(val);
	};
	
    return {
    	exec:function(inputVal, validates){
    		var result = [true, null];
    		var i;
    		var tmp1;
    		if(typeof inputVal == 'undefined' || inputVal===null){
    			//when the user input nothing,inputVal should be an empty string
    			inputVal = '';
    		}
			for(i=0 ; i<validates.length ; i++){
				tmp1 = [_c[validates[i]](inputVal.toString()), validates[i]];
				if(!tmp1[0]){
					result = tmp1;
					break;
				};
			}
    		return result;
    	},
    	toUpperCase:function(value){
    		if(typeof value == 'undefined' || value===null){
    			//when the user input nothing,value should be an empty string
    			value = '';
    		}
    		return value.toString().toUpperCase();
    	}
    };
});