var app = angular.module("myApp", []).controller("myCtrl", function($scope){
	$scope.sortType = "title";
	$scope.sortReverse = false;
	
	$scope.contributions = [ 
	{"ContentId":"1", "Title":"Lagos launches child protection agency", "Creator":"BSUs Seasons", "Country":"Nigeria", "CreationDate":-157766400000, "Shares":"", "Status":"Published", "ReportText":"This the text for the child protection agency report"},
	{"ContentId":"2", "Title":"Lagos launches data protection agency", "Creator":"Bodstu dsfsons", "Country":"UK", "CreationDate":1361836800000, "Shares":"", "Status":"Submitted", "ReportText":"This the text for the data protection agency report"},
	{"ContentId":"3", "Title":"Lagos launches food protection agency", "Creator":"Tutu Seasons", "Country":"Nigeria", "CreationDate":1330214400000, "Shares":"", "Status":"Submitted", "ReportText":"This the text for the food protection agency report"} 
	];
});