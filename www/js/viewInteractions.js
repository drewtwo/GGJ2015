var viewInteractions = {
	initialize: function() {
		var interactions = JSON.parse(localStorage["interactions"]);
		interactions.forEach(function(interaction) { 
			var date = $("<p></p>").text(JSON.stringify(interaction["date"]));
			var interaction = $("<p></p>").text(JSON.stringify(interaction["interaction"]));
			var image = $("<img></img>");
			image.attr("src", "data:image/jpeg;base64,"+JSON.stringify(interaction["imageURI"]));
			$("div#interactions").after(date, interaction, image);
		});
	},
	backToMainScreen: function() {
		window.location = "index.html";
	}
}
viewInteractions.initialize();