(function(module){
	  var github = function($http){
    
	// read github api and return all issues
    var getIssues = function(){
		
     return $http.get("https://api.github.com/repos/WorkAtSwordfish/GitIntegration/issues")
           .then(function(response){
             return response.data;			
           });
    };
    return {getIssues: getIssues};
  };
  
  module.factory("github", github);
}(angular.module("githubReport")));