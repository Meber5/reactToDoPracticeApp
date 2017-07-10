const express = require('express');
const router = express();
const TodoItem = require('../models/TodoItems');

router.get('/add', (req, res) => {
  const testTask = new TodoItem({
    task: "yee test guy",
  });
  testTask.save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
