(function(module){
	var MainController = function($scope,github,$routeParams,$log){
    
	//retrieve data and store in a model
	var onIssues = function(data){
		$scope.issues = data;		
	};
	//if link fails return correct error message to ther user
    var onError = function(response) {
	  swal("Error!!", "Could not fetch the data!", "error");
    };
	

	 $scope.username = "WorkAtSwordfish";
	 github.getIssues().then(onIssues,onError);
    };
	
 //register controller  
 module.controller("MainController", MainController);
}(angular.module("githubReport")));