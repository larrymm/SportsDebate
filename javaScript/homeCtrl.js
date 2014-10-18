var app = angular.module('sportsDebate');

app.controller('homeCtrl', function($scope, homeService, $location, $firebase, PostService, authService){
	$scope.data = {};
	$scope.showStuff = [];

   $scope.posts = $firebase(new Firebase("https://sportsdebate.firebaseio.com/dev/posts")).$asArray();
   // $scope.comments = $firebase(new Firebase("https://sportsdebate.firebaseio.com/dev/comments/" )).$asArray();

	$scope.showCommentContainer = function(post, index){	
		$scope.data.myComment = '';
		for(var i = 0; i < $scope.showStuff.length; i++){
			$scope.showStuff[i] = false;
		}
		$scope.showStuff[index] = true;
		$firebase(new Firebase("https://sportsdebate.firebaseio.com/dev/posts/" + post.$id + '/comments')).$asArray().$loaded().then(function(comments){
	   		$scope.comments = comments;
		});
	}

$scope.commentLimit = 3;


   $scope.postMessages = function(){
   	   $scope.posts.$add({title: $scope.message, timestamp: new Date().toISOString()});
		$scope.message=''
   }



   $scope.postComment = function(){
   	$scope.comments.$add({title: $scope.data.myComment});
   	$scope.data.myComment = '';
   	$scope.comment = !$scope.comment;
   }

   $scope.cancelComment = function(index){
   	$scope.data.myComment = '';
   	$scope.showStuff[index] = false;
   }

   // $scope.comment = false;
   // $scope.addComment = function(){
   // 	$scope.comment = !$scope.comment;
   // }

   $scope.logoutUser = function(){
   		authService.logout();
   		$location.path('/main')
   }

});