var task = {
	currentInstructions:"",
	currentMessage:"",
    initialize: function() {
		var level = 0;
		currentMessage = 0;
		$.getJSON("json/tasks.json", function(taskJson) {
			currentInstructions = taskJson[level].instructions[task.getRandomInt(0,1)];
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