const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let todos = []; // An array to store the todos.

app.get("/todos", (req, res) => {
    res.json(todos);  // Send the todo items as JSON.
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
