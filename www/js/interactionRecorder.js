var interactionRecorder = {
	initialize: function() {
	},
	saveInteractionWithURI: function(imageURI) {
		alert('save with uri because: ');
		console.log("YESSSSSS! " + imageURI);
		var interaction = $("input[name='interaction']").val();
		
		var jsonObject = {"date":new Date(), "interaction":interaction,"imageURI":imageURI};
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
	},
	saveInteraction: function() {
		var interaction = $("input[name='interaction']").val();
		
		var jsonObject = {"date":new Date(), "interaction":interaction, "imageURI":"No Picture?"};
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
	},
	onSuccess: function(imageData) {
		console.log("WHAT IS GOING ON? ");
		this.saveInteractionWithURI(imageData);
	},
	 onFail: function(message) {
		alert('Failed because: ' + message);
	},
	cameraThenSave: function() {
		console.log("WHAT IS GOING ON? ");
		navigator.camera.getPicture(this.onSuccess, this.onFail, { 
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			cameraDirection: Camera.Direction.FRONT,
			saveToPhotoAlbum: false
		});
	}
};
interactionRecorder.initialize();