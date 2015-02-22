(function() {
	var databaseRef = new Firebase('https://grouple.firebaseio.com');
	var currentUser = databaseRef.getAuth();
	
	// populate gEvents with user defined events
	var fetchUserEvents = function(gEvents) {
		databaseRef.child('events').on('value', function(snapshot) {
			parseData(snapshot.val(), callback);
		})
	};

	var parseEvents(items, callback) {
		
	}
})