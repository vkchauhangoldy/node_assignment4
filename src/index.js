const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "failure",
            message: "both are must be a numeric"
        });
    } else if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        });
    } else {
        const sum = 0
        return res.status(200).json({
            status: "sucess",
            message: "the difference of given two numbers",
            sum: num1 + num2
        });
    }
});

app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "failure",
            message: "both are must be a numeric"
        });
    } else if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        });
    } else {
        const difference = 0
        return res.status(200).json({
            status: "sucess",
            message: "the difference of given two numbers",
            difference: Math.abs(num1 - num2)
        });
    }
});

app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "failure",
            message: "both are must be a numeric"
        })
    } else if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    } else {
        const result = 0
        return res.status(200).json({
            status: "sucess",
            message: "the difference of given two numbers",
            result: num1 * num2
        });
    }
});

app.post("/divide", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "failure",
            message: "both are must be a numeric"
        });
    } else if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        });
    } else if (num2 == 0) {
        return res.status(400).json({
            status: "error",
            message: "Cannot divide by zero"
        });
    } else {
        const result = 0
        return res.status(200).json({
            status: "sucess",
            message: "the difference of given two numbers",
            result: num1 / num2
        });
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;