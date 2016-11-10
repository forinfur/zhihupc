var app=angular.module('zhihu',['ctrls','diractives','fuwu','ngRoute',"ngSanitize"]);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tpls/index-list.html',
		controller:'newMsg'
	}).when('/show/:id',{
		templateUrl:'tpls/show.html',
		controller:'show'
	}).when('/theme/:id',{
		templateUrl:'tpls/theme-list.html',
		controller:'theme'
	})
})