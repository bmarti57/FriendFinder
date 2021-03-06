var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	})

	app.post('/api/friends', function(req, res) {
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		var userInput = req.body;
		var userResponses = userInput.scores;

		var totalDifference = 0; 

		for (var i = 0; i < friends.length; i++) {
			totalDifference = 0;

			for (var j = 0; j < friends[i].scores[j]; j++) {
				totalDifference += Math.abs(parseInt(userResponses[j]) - parseInt(friends[i].scores[j]));

				if(totalDifference <= bestMatch.friendDifference) {
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		friends.push(userInput);
		res.json(bestMatch);
	});
}