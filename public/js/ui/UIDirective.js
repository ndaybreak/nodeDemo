
app.directive("hello",function(){
	return{
			restrict:'E',
			template:'<h5>Hello AngularJS</h5>',    
			trunsclude:false,
			replace:false,
			scope:{},// 添加scope属性后，该指令将会拥有自己的scope,同时会继承该指令所在的scope
//			compile 与 link 函数不能同时出现，同时出现时只有compile函数有作用
//			compile:function(){},//$compile 函数处理时调用指令的compile函数来改变dom结构
			link:function(scope,element,attrs){//将模板的scope与模板关联
				console.log('child scope');
				console.log(scope);
			}
	};
});
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