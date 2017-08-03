/**
 * 指令模板中数据的更新是在digest循环中做的.
 *
 * trunsclude
 * replace:
 *
 * 指令的作用是把我们自定义的语义化标签替换成浏览器能够认识的HTML标签。
 compile阶段进行标签解析和变换，link阶段进行数据绑定等操作

 *
 * 控制器可以暴露一个API，而link可以通过require与其他的指令控制器交互
 所以如果要开放出一个API给其他指令用就写在controller中，否则写在link中
 controller中可以放入依赖注入,link中不可以
 *
 * */
app.directive("hello1",function(){
	return{
			restrict:'E',
			template:'<h1>Hello {{title}} {{name}}</h1><input ng-model="title">',
			trunsclude:false,
			replace:false,
			//require: '?ngModel',
			scope:{
				title: '@txtTitle'
			},// 添加scope属性后，该指令将会拥有自己的scope,同时会继承该指令所在的scope  (note. 应该不是继承, 但是可以通过scope.$parent 来访问父scope)
//			compile 与 link 函数不能同时出现，同时出现时只有compile函数有作用
//			compile:function(){},//$compile 函数处理时调用指令的compile函数来改变dom结构
//			link方法中的第四个参数，叫做父控制器，只要是指令写了require参数，就可以使用这个参数了，它可以访问父级contorller的方法中提供的一些属性和方法。
//		ctrl：用于调用其他指令的方法,指令之间的互相通信使用，需要配合require
			link:function(scope,element,attrs,ctrl){//将模板的scope与模板关联
				console.log('child scope');
				console.log(scope);
			},
			controller: ['$scope', function(scope, $element) {
				scope.name = 'xiaoch'

			}]
			,
			compile: function(element, attrs) {
				console.log(arguments)
				return function() {
					console.log(arguments)
				}
			}
	};
});
/*
 * 如果在 directive 中直接返回一个函数，则这个函数会作为 compile 的返回值，也即是作为 link 函数使用
 * 这里说的 compile 和 link 都是一个指令的组成部分，一个完整的定义应该返回一个对象，这个对象包括了多个属性：
name
priority
terminal
scope
controller
require
restrict
template
templateUrl
replace
transclude
compile
link
 * */

app.directive("expander",function(){
	return {
		restrict:"EA",
		replace:true,  //
		transclude:true,
		scope:{
			name:'=expandTitle'
		},
		templateUrl:'template/expander.html',
//		compile:function(){
//			console.log(arguments);
//		},
		link:function(scope,element,attrs){
			scope.showMe = false;
			scope.toggle = function(){
				scope.showMe = !scope.showMe;
			};
			
			scope.$watch('name',function(val,old){
				console.log('old+val');
				console.log(old + '__' + val);
			});
		}
	};
});

/**
 *
 */
app.directive('paScroll',function($window){
	return function(scope, element, attrs){
		element.wrap('<div class="scroll-container" />');
		element.wrap('<div class="pa-scroll-target" style="overflow-x: hidden;border:1px solid red" />');
		element.parent().after('<div class="pa_scroll-div" style="overflow-x:auto;position: fixed;bottom: 0px;border:1px solid red">'+
									'<div style="height:10px"></div>'+
								'</div>');
		var scrollObj,targetWidth;
		var listener = setInterval(function() {
			scrollObj = element.parent().next('.pa_scroll-div');
			scrollObj.width(element.parent().width());
			scrollObj.find('div').width(element.width());
	     }, 1000);
		//when you go to a new link it stops listening
		element.on('remove', function() {
			clearInterval(listener);
		});
		$('.pa_scroll-div').on('scroll',function(){
			$('.pa-scroll-target').scrollLeft($(this).scrollLeft());
		});
	};
});

// app.directive('input', function() {
// 	return function(scope, element) {
//         element.on('blur', function() {
//         	alert(element.val())
// 		})
// 	}
// })

app.directive('hpeButton', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			title: '@btnText',
			style: '@btnType',
			icon: '@btnIcon'
		},
		template: '<a class="btn btn-{{style}}"><i class="{{icon}}"></i>{{title}}</a>',
		compile: function (element, attrs) {
			if (!attrs.btnType) { attrs.btnType = 'Primary'; }
			return function (scope, element) {
			}
		}
	};
});

// *****************************************************************************
/**
  	 require的作用是为了让父子指令或者兄弟指令的controller之间搭建一个桥梁
	 也就是说父指令里的controller里面的数据能分享给子指令的controller
	 其中子指令的link第四个参数的值是父指令的controller对象的作用域上下文
	 require有两个修饰符号:”?”、”^”
	 ? : 如果require没有找到相应的指令避免报错,还能确保程序的正常执行
	 ^ : 表示往父级查找

 	 controller，这个和我们angular中的控制器有些不同，这个主要是写一些指令的对外方法。
 * */
app.directive("hello",function(){
	return {
		restrict : "E",
		controller : function($scope){
			$scope.name = "张三";
			this.information = {
				name : $scope.name,
				age : 25,
				job : "程序员"
			}
		},
		link : function(scope){

		}
	}
});
app.directive("beautiful",function(){
	return {
		restrict : "E",
		require : [ "?test", "?good"],
		controller : function(){
			this.name = "beautiful";
		},
		link : function (scope,element,attrs,ctrls) {
			console.log(ctrls)
		}
	}
});
app.directive("good",function(){
	return {
		restrict : "A",
		require : "?^hello",
		controller : function(){
			this.name = "good";
		},
		link : function (scope,element,attrs,hello) {
			console.log(hello.information)
		}
	}
});

app.directive("test",function(){
	return {
		restrict : "A",
		require : "?^hello",
		controller : function(){
			this.name = "test";
		},
		link : function (scope,element,attrs,hello) {
			console.log(hello.information)
		}
	}
});



console.log('uiDirective')