var task = {
	currentInstructions:"",
	currentMessage:"",
	messageCount:"",
    initialize: function() {
		var level = 0;
		currentMessageIndex = 0;
		$.getJSON("json/tasks_limited.json", function(taskJson) {
			var instructionsCount = Object.keys(taskJson[level].instructions).length - 1;
			currentInstructions = taskJson[level].instructions[task.getRandomInt(0,instructionsCount)];
			messageCount = Object.keys(currentInstructions.messages).length - 1;
			var currentMessage = currentInstructions.messages[currentMessageIndex];
			$("div#task_field").html(currentMessage);
		});
	},
	getRandomInt: function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	nextTask: function() {
		currentMessageIndex++;
		if (currentMessageIndex > messageCount) {
			console.log("Testing messageCount");
			window.location = "interactionRecorder.html";
		} else {
			console.log("next page");
			var currentMessage = currentInstructions.messages[currentMessageIndex];
			$("div#task_field").html(currentMessage);
		}
	},
	endTasks: function() {
		window.location = "index.html";
	}
};

task.initialize();