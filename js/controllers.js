
var	ctrl= angular.module("ctrls",[]);
ctrl.controller('nav',function($scope,navs){
	navs.getNav(function(data){
		$scope.navs=data.others

	})
})

ctrl.controller("newMsg",function($scope,$http){
	$http.get('php/api.php?url=http://news-at.zhihu.com/api/4/news/latest').success(function(data){
		$scope.list=data.stories;
	})
})
ctrl.controller("show",function($scope,$http,$routeParams){
	$http.get('php/api.php?url=http://news-at.zhihu.com/api/4/news/'+$routeParams.id).success(function(data){
		$scope.data=data;
	})
})

// http://news-at.zhihu.com/api/4/news/3892357
ctrl.controller("theme",function($scope,$http,$routeParams){
	$http.get('php/api.php?url=http://news-at.zhihu.com/api/4/theme/'+$routeParams.id).success(function(data){
		$scope.list=data;
	})
})