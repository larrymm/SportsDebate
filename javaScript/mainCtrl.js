var app = angular.module('sportsDebate');

app.controller('mainCtrl', function($scope, authService, $location){

	$scope.login = false;
	$scope.signup = false;

	$scope.showLogin = function(){
		$scope.login = !$scope.login;
	}

	$scope.showSignup = function(){
		$scope.signup = !$scope.signup;
	}

	$scope.registerUser = function(){
		authService.newUser($scope.newUser, function(user){
			$scope.$apply(function(){
			$location.path('/home')	
			})
			
		});
	}

	$scope.signin = function(){
		authService.currentUser($scope.user, function(user){
			$scope.$apply(function(){
			$location.path('/home')	
			})
			
		});
	}




	});