var interactionRecorder = {
	initialize: function() {
	},
	saveInteraction: function() {
		var interaction = $("input[name='interaction']").val();
		
		var jsonObject = {"date":new Date(), "interaction":interaction};
		var array;
		if (localStorage["interactions"]) {
			var array = JSON.parse(localStorage["interactions"]);
		} else {
			var array = [];
		}
		array.push(jsonObject);
		
		localStorage["interactions"] = JSON.stringify(array);
		console.log(interaction);
		window.location = "index.html";
	}
};
interactionRecorder.initialize();