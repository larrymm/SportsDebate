var app = angular.module('sportsDebate');

app.service('authService', function($firebase, environmentService){
	var url = environmentService.getEnv().firebase;
	var ref = new Firebase(url);
	var userRef = new Firebase(url + '/users');

	return {
		newUser: function(user, cb){
			ref.createUser({
  				email    : user.email,
  				password : user.password
  			}, function(error) {
  				if (error === null) {
    				console.log("User created successfully");
    				//add user to users array
    				ref.authWithPassword({
						email    : user.email,
						password : user.password
					}, function(err, authData) {
				  if (authData) {
				  	authData.name = user.name;
				  	authData.timestamp = new Date().toISOString();
				    ref.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
				    cb(authData);


  				} else {
    				console.log("Error creating user:", error);
 						}
					})}
    			})
    		},
		currentUser: function(user, cb){
			ref.authWithPassword({
  				email    : user.email,
  				password : user.password
			}, function(error, authData) {
  				if (error === null) {
    			// user authenticated with Firebase
    				console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
    				cb(authData);
 				 } else {
    				console.log("Error authenticating user:", error);
  					}
				});
			},

			logout:function(){
				ref.unauth();
			}
		
		}
	
	});