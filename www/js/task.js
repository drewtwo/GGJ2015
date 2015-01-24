var task = {
	currentInstructions:"",
	currentMessage:"",
    initialize: function() {
		var level = 0;
		currentMessageIndex = 0;
		$.getJSON("json/tasks.json", function(taskJson) {
			var messageCount = Object.keys(taskJson[level].instructions).length - 1;
			currentInstructions = taskJson[level].instructions[task.getRandomInt(0,messageCount)];
			var currentMessage = currentInstructions.messages[currentMessageIndex];
			$("div#task_field").html(currentMessage);
		});
	},
	getRandomInt: function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	nextTask: function() {
		currentMessageIndex++;
		var currentMessage = currentInstructions.messages[currentMessageIndex];
		$("div#task_field").html(currentMessage);
	},
	endTasks: function() {
		window.location = "index.html";
	}
};

task.initialize();