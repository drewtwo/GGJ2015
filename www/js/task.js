var task = {
    // Application Constructor
    initialize: function() {
		$.getJSON("json/tasks.json", function(taskJson) {
			$("div#task_field").text(taskJson[0].instructions[task.getRandomInt(0,1)].messages[0]);
		});
	},
	getRandomInt: function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

task.initialize();