var express = require("express");
var router = express.Router();

//Import the model to use its database functions
var todo = require("../models/todo");

// Get client URL if root
router.get("/", function (req, res) {
    todo.all(function (data) {
        var hbsObject = {
            todo: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/todo", function (req, res) {
    todo.create(
        ["name", "complete"],
        [req.body.name, req.body.complete],
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/todo/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    todo.update(
        { complete: req.body.complete },
        condition, function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

router.delete("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    todo.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            //if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;