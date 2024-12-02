const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Todo App Backend is Running!");
});


let todos = []; // Store todos

// Fetch all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({ message: "Todo added!", todos });
});

// Delete a todo by index
app.delete("/todos/:index", (req, res) => {
    const index = req.params.index;
    if (index < 0 || index >= todos.length) {
        return res.status(404).json({ message: "Todo not found!" });
    }
    todos.splice(index, 1);
    res.json({ message: "Todo deleted!", todos });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
