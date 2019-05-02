// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const todo = {
    all: function (cb) {
        orm.all("todo", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("todo", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("todo", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("cats", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (todoController.js).
module.exports = todo;