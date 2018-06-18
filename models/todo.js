const orm = require("../config/orm.js");

const todo = {
    selectAll: function (cb) {
        orm.selectAll("todo", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createOne: function (cols, vals, cb) {
        orm.createOne("todo", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("todo", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (todoController.js).
module.exports = todo;