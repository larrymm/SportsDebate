var app = angular.module('sportsDebate');

app.service('environmentService', function($window){
	return {
		getEnv: function(){
			return $window.env;
		}
	}

});