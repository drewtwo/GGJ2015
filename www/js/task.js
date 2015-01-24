var task = {
    // Application Constructor
    initialize: function() {
		var possibleTasks = ["Find and touch a nearby brick with one finger, is anyone else doing the same?"
		,"Touch your nose with two fingers, is anyone else doing the same?"];
		$("div#task_field").text(possibleTasks[this.getRandomInt(0,1)]);
	},
	getRandomInt: function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

task.initialize();