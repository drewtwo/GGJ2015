var viewInteractions = {
	initialize: function() {
		var interactions = JSON.parse(localStorage["interactions"]);
		interactions.forEach(function(interaction) { 
			var date = $("<p></p>").text(JSON.stringify(interaction["date"]));
			var interaction = $("<p></p>").text(JSON.stringify(interaction["interaction"]));
			$("div#interactions").after(date, interaction);
		});
	},
	backToMainScreen: function() {
		window.location = "index.html";
	}
}
viewInteractions.initialize();