angular.module("DataServiceModule", []).factory("AdminService", function($http){

	var URL_GET_TABLE_DATA = "../GetTableData";

	var tableData;
	
	var msgList = {
		'ErrMsg_OptBuCustExcp':{
			'elMdcpOrgId':
			{
				'notNull':'MDCP Org ID is required.',
				'max32':'Max length of MDCP Org ID is 32.',
			},
			'elAmid2':
			{
				'notNull':'Please input a valid AMID2 or an asterisk.',
				'max15':'Max length of AMID2 is 15.',
			}
		},

		'ErrMsg_OptCntryExcp':{
			'elNote':
			{
				'max256orNull':'Max length of Note is 256.',
			},
		}
	};
	
	function getErrMsg(page, name, errName){
		try{
			return errMsgList[page][name][errName];
		}catch(e){
			alert('getErrMsg occurs error.page:'+page+',objName:'+name+',errName:'+errName);
		}
	}
	
	var service =  
	{
		getErrMsg: getErrMsg,
		
		getTableData: function(callback){
			this.httpGet(URL_GET_TABLE_DATA,function(result){
										tableData = result;
								        callback && callback(tableData);
								   });
		},
		
		httpGet : function(url, cb, errMsg){
			return $http
					.get(url)
					.then(function(result)
					{
						cb(result);
					}, 
					function(error)
					{
						alert('Sorry, some unexpected errors happened.');
					});
		},
		httpPost : function(url,inputObj,cb){
			return $http
			.post(url,inputObj).then(function(result){
				cb(result);
			},function(error)
			{
				alert('Sorry, some unexpected errors happened.');
			});
		}
	};
	return service;
});