var task = {
	currentInstructions:"",
	currentMessage:"",
    initialize: function() {
		var level = 0;
		currentMessage = 0;
		$.getJSON("json/tasks.json", function(taskJson) {
			var messageCount = Object.keys(taskJson[level].instructions).length;
			currentInstructions = taskJson[level].instructions[task.getRandomInt(0,messageCount)];
			$("div#task_field").text(currentInstructions.messages[currentMessage]);
		});
	},
	getRandomInt: function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	nextTask: function() {
		currentMessage++;
		$("div#task_field").text(currentInstructions.messages[currentMessage]);
	},
	endTasks: function() {
		window.location = "index.html";
	}
};

task.initialize();