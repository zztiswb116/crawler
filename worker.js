const puppeteer = require('puppeteer');
const path = require('path');
const argv = process.argv;

if (argv.length < 3) {
	console.error('must have task argument to launch!');
	process.exit(1);
}

// inject current path
module.paths.push(process.cwd());

let taskfile = path.join('tasks', argv[2]),
	handle = require(taskfile);

(async () => {
  const browser = await puppeteer.launch();
  handle(browser)
})();