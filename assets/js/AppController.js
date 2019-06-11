(function(module) {
var AppController = function ($scope, $uibModal, $log) {
	$scope.saveIssue = function(){
		console.log($scope.record);
		
		// authorize the user before creating new issue
	};
};
 module.controller("AppController", AppController);
}(angular.module("githubReport")));