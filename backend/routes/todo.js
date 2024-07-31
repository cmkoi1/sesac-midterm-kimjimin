const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.get('/todos', controller.getTodos);
router.get('/todos/:id', controller.getTodo);
router.post('/todos', controller.postTodos);
router.patch('/todos/:id', controller.patchTodos);
router.delete('/todos/:id', controller.deleteTodos);

module.exports = router;