const EventEmitter = require('events');
const puppeteer = require('puppeteer');
const {fork} = require('child_process');
const uuidv4 = require('uuid/v4');

class Task extends EventEmitter {
	constructor(task) {
		super();
		// this.script = filename
		this.id = uuidv4();
		this.task = task;
	}

	static run(filename) {
		// child_process.fork(modulePath[, args][, options])
		let tsk = fork('./worker.js', [filename]);

		return new Task(tsk);
	}
}

module.exports = Task;