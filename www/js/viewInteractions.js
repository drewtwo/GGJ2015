var viewInteractions = {
	initialize: function() {
		var interactions = JSON.parse(localStorage["interactions"]);
		interactions.forEach(function(interaction) { 
			$("div#interactions").append(JSON.stringify(interaction["date"]));
			$("div#interactions").append(JSON.stringify(interaction["interaction"]));
			$("div#interactions").append(JSON.stringify(interaction["imageURI"]));
		});
	},
	backToMainScreen: function() {
		window.location = "index.html";
	}
}
viewInteractions.initialize();