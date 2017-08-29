const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Task = require('./task');

let taskBus = {}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/task/', function(req, res) {
	if (!req.body.name) {
	  res.status(500).send('missing valid task name!');
	  return 
	}

	runTask(req.body.name)
	res.send("success")
})

app.get('/task/:id', function(req, res) {
	let id = req.params.id,
		tsk = taskBus[id];
	if (!tsk) {
	  res.status(500).send('invalid task id!');
	  return
	}

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function runTask(name) {
	task = Task.run(name)
	taskBus[task.id] = task
}