var interactionRecorder = {
	initialize: function() {
	},
	saveInteraction: function() {
		var interaction = $("input[name='interaction']").val();
		console.log(interaction);
		window.location = "index.html";
	}
};
interactionRecorder.initialize();