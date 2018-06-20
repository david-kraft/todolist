const express = require("express");
const todo = require("../models/todo");
const router = express.Router();

// Get client URL if root
router.get("/", function (req, res) {
    todo.selectAll(function (data) {
        const hbsObject = {
            todo: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/todo", function (req, res) {
    todo.createOne(
        ["name", "complete"],
        [req.body.name, req.body.complete],
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/todo/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    todo.updateOne(
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

module.exports = router;