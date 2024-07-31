const { Todo } = require('../models/index');

exports.getTodos = async (req, res) => {
    try {
        const Todos = await Todo.findAll();
        res.json(Todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const Todos = await Todo.findOne({
            where: {
                id,
            }
        });
        if (Todos) {
            res.json(Todos);
        } else {
            res.json({ "message": "Todo not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.postTodos = async (req, res) => {
    try {
        console.log(req.body)
        const { title, done } = req.body;
        const newTodo = await Todo.create({
            title, done
        });

        res.json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


exports.patchTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const { done } = req.body;
        const Todos = await Todo.findOne({
            where: {
                id,
            }
        });
        const updatedTodo = await Todo.update(
            { done },
            { where: { id } }
        );

        if (Todos) {
            res.json(updatedTodo);
        } else {
            res.json({ "message": "Todo not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const isDeleted = await Todo.destroy({
            where: { id }
        });
        console.log(isDeleted);

        if (isDeleted) {
            return res.send(true);
        } else {
            res.json({ "message": "Todo not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}